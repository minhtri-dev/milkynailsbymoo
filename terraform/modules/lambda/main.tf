resource "aws_iam_role" "lambda_exec" {
	name               = "${var.name}-lambda-exec"
	assume_role_policy = jsonencode({
		Version = "2012-10-17"
		Statement = [{
			Effect = "Allow"
			Principal = { Service = "lambda.amazonaws.com" }
			Action = "sts:AssumeRole"
		}]
	})
}

resource "aws_iam_role_policy_attachment" "basic_exec" {
	role       = aws_iam_role.lambda_exec.name
	policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "this" {
	function_name = var.name
	role          = aws_iam_role.lambda_exec.arn
	package_type  = "Image"
	image_uri     = var.image_uri
	timeout       = var.timeout
	memory_size   = var.memory_size
	architectures = [var.architecture]

	environment {
		variables = merge({
			PORT = "8080"
			AWS_LWA_PORT = "8080"
			HOSTNAME = "0.0.0.0"
			NODE_ENV = "production"
		}, var.environment_variables)
	}
}

resource "aws_apigatewayv2_api" "http" {
	name          = "${var.name}-http-api"
	protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "lambda" {
	api_id                 = aws_apigatewayv2_api.http.id
	integration_type       = "AWS_PROXY"
	integration_uri        = aws_lambda_function.this.arn
	integration_method     = "POST"
	payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "default" {
	api_id    = aws_apigatewayv2_api.http.id
	route_key = "$default"
	target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_apigatewayv2_stage" "default" {
	api_id      = aws_apigatewayv2_api.http.id
	name        = "$default"
	auto_deploy = true
}

resource "aws_lambda_permission" "allow_apigw" {
	statement_id  = "AllowAPIGatewayInvoke"
	action        = "lambda:InvokeFunction"
	function_name = aws_lambda_function.this.function_name
	principal     = "apigateway.amazonaws.com"
	source_arn    = "${aws_apigatewayv2_api.http.execution_arn}/*/*"
}


output "lambda_function_name" {
	value = aws_lambda_function.this.function_name
}

output "lambda_function_arn" {
	value = aws_lambda_function.this.arn
}

output "http_api_id" {
	value = aws_apigatewayv2_api.http.id
}

output "http_api_endpoint" {
	value = aws_apigatewayv2_api.http.api_endpoint
}

output "http_stage_name" {
	value = aws_apigatewayv2_stage.default.name
}


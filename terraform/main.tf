locals {
	name = "${var.app_name}-${var.environment}"
}

resource "aws_ecr_repository" "app" {
	name                 = local.name
	image_tag_mutability = "MUTABLE"
	force_delete         = true
	image_scanning_configuration {
		scan_on_push = true
	}
}

variable "image_tag" {
	description = "Image tag to deploy from ECR"
	type        = string
	default     = "latest"
}

module "lambda" {
	source       = "./modules/lambda"
	name         = local.name
	image_uri    = "${aws_ecr_repository.app.repository_url}:${var.image_tag}"
	architecture = "x86_64"
	memory_size  = 1024
	timeout      = 30
	environment_variables = {
		NEXT_TELEMETRY_DISABLED = "1"
	}
}


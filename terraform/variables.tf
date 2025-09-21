variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "milkynailsbymoo"
}

variable "environment" {
  description = "Environment (dev, prod)"
  type        = string
  default     = "prod"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-southeast-2"
}
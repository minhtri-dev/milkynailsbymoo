variable "name" {
	description = "Base name for resources"
	type        = string
}

variable "image_uri" {
	description = "Full ECR image URI including tag"
	type        = string
}

variable "memory_size" {
	description = "Lambda memory size in MB"
	type        = number
	default     = 1024
}

variable "timeout" {
	description = "Lambda timeout in seconds"
	type        = number
	default     = 30
}

variable "architecture" {
	description = "CPU architecture for Lambda"
	type        = string
	default     = "x86_64"
	validation {
		condition     = contains(["x86_64", "arm64"], var.architecture)
		error_message = "architecture must be x86_64 or arm64"
	}
}

variable "environment_variables" {
	description = "Extra environment variables for the function"
	type        = map(string)
	default     = {}
}


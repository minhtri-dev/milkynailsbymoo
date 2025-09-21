provider "aws" {
  profile = "milkynailsbymoo"
  region  = "ap-southeast-2"

  default_tags {
    tags = {
      Project = "milkynailsbymoo"
      Client  = "Ashley Arcigal"
    }
  }
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.14.0"
    }
  }

  required_version = ">= 1.0"

  backend "s3" {
    bucket         = "milkynailsbymoo-terraform-state"
    key            = "terraform.tfstate"
    region         = "ap-southeast-2"
    encrypt        = true
  }
}
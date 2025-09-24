# S3 static website bucket
resource "aws_s3_bucket" "s3-static-website" {
  bucket = var.s3_name
}

# Public access settings
resource "aws_s3_bucket_public_access_block" "s3-static-website-public-access" {
  bucket = aws_s3_bucket.s3-static-website.id

  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}

# Public read-only bucket policy (objects only)
data "aws_iam_policy_document" "public_read_only" {
  statement {
    sid     = "PublicReadGetObject"
    effect  = "Allow"
    principals { 
      type = "AWS" 
      identifiers = ["*"] 
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.s3-static-website.arn}/*"]
  }
}

resource "aws_s3_bucket_policy" "public_read_only" {
  bucket = aws_s3_bucket.s3-static-website.id
  policy = data.aws_iam_policy_document.public_read_only.json
}

# S3 bucket static website configuration
resource "aws_s3_bucket_website_configuration" "static_site_bucket_website_config" {
  bucket = aws_s3_bucket.s3-static-website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}
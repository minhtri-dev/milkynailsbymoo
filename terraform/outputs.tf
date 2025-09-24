output "cloudfront_domain_name" {
  value = "https://${module.cloudfront.cloudfront_distribution_domain_name}"
}

output "cloudfront_id" {
  value = "${module.cloudfront.cloudfront_distribution_id}"
}
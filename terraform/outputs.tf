output "cloudfront_domain_name" {
  value = "https://${module.cloudfront.cloudfront_distribution_domain_name}"
}
module "s3" {
  source                       = "./modules/s3"
  s3_name                      = "milkynailsbymoo-app"
}

module "cloudfront" {
  source                       = "./modules/cloudfront"
  s3_id                        = module.s3.static_website_id
}
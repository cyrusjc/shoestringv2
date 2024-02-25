Welcome to the repo for https://shoestring.cafe !

This react app is deployed on S3 with lambda triggers that update menu. The repo of the go lambda function can be found here: https://github.com/cyrusjc/shoestring-go-lambda

Currently deployed using:
Route 53 -> Cloudflare -> AWS Certificate Manager -> S3 Bucket

Domain name managed by namecheap.

Automatically builds and uploads to S3 on sucessful merge request with Github Actions

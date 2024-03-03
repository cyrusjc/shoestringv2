all: build clean_bucket ship invalidate clean

build:
	npm run build

clean_bucket:
	aws s3 rm --recursive s3://shoestring-cafe-react	

ship:
	aws s3 sync dist/ s3://shoestring-cafe-react

invalidate:
	aws cloudfront create-invalidation --distribution-id ENW9E8YH2P3BH --paths "/*"

clean: 
	rm -rf dist/


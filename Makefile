all: build ship clean

build:
	npm run build
    
ship:
	aws s3 sync dist/ s3://shoestring-cafe-react

clean: 
	rm -rf dist/


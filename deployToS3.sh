aws s3 cp . s3://docs.fit2cloud.com/ --recursive --exclude ".git/*" --exclude "*.sh" --exclude ".gitignore" --exclude ".settings/*" --exclude ".project" --exclude "build/*"  --exclude "*.py"

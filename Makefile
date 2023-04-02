dev:
	docker-compose -f docker-compose.yml up

down:
	docker-compose down

build:
	docker build \
	--build-arg NODE_ENV=production \
	--build-arg STRAPI_URL=http://fevg.ru \
	-t fevg/fevg-admin:0.0.1 \
	-f Dockerfile.prod .

prod:
	docker-compose -f docker-compose.prod.yml up -d

copy-file:
	scp -i ~/.ssh/vikings_rsa .env root@185.177.216.70:/root/fevg-admin

connect-to-vps:
	ssh -i ~/.ssh/vikings_rsa root@185.177.216.70

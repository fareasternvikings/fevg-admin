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
	docker-compose -d -f docker-compose.prod.yml up
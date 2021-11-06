#1. Build a production image in order to push it to Docker Hub

docker-image rm -f sandrospengler/myexpressapp

docker-compose \
    -f docker-compose.yaml \
    -f docker-compose.prod.yaml \
    build expressdocker 

docker image prune
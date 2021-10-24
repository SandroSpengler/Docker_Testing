#1. Build and Runs the Docker-Compose Envoirment
#2. Clears unnecessary images
CLEAR=$1

docker-compose down --remove-orphans -v

docker-compose \
    -f docker-compose.yaml \
    -f docker-compose.pi.yaml \
    up -d \
    --build \
    # runs only one container
    # --no-deps expressdocker \

if [[ $CLEAR = "prune" ]];
    then 
        docker image prune
        docker volume prune
fi



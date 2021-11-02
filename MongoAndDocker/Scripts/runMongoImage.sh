docker rm \
    -f MongoNode

docker run \
    --name MongoNode \
    -p 27017:27017 \
    -v data:/data/db \
    --network mongodb \
    -d mongo \

# docker network connect \
#     Test0 MongoNode
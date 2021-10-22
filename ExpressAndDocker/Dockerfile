# Create a new image from the base nodejs image.
FROM node:14
# Create the target directory in the image
RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY ./package.json /usr/src/app
# Install required dependencies
# Spaces are required 
# RUN npm Install
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi
# Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore doe$
COPY . /usr/src/app
# Open port 5000. This is the port that our development server uses. Expose only opens the PORT to other Docker containers. Use -P when running to make the port public. 
# Set at runtime by the docker-compose
# EXPOSE 5000
# Install required dependencies# Start the application. This is the same as running ng serve.
#Get Started out of Docker
# CMD ["npm run prod"]
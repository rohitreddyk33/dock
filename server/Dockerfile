FROM node:lts-alpine3.16

EXPOSE 6969
# Create app directory
WORKDIR /server
# Install app dependencies
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
CMD [ "npm", "start" ]
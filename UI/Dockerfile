FROM node:lts-alpine3.16

EXPOSE 3000
# Create app directory
WORKDIR /react-app
# Install app dependencies
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
CMD [ "npm", "start" ]
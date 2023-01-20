FROM node:19.2-alpine

WORKDIR /server

EXPOSE 7070

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
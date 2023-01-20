FROM node:19.2-alpine

WORKDIR /ui

EXPOSE 3000

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm","start"]
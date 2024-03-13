FROM node:latest

WORKDIR /app

COPY back/package*.json ./
COPY back/server.js ./
COPY front/index.html ./
COPY styles.css ./

RUN npm install

EXPOSE 4000

EXPOSE 3000

CMD [ "npm", "start" ]

FROM node:alpine

WORKDIR /usr/node/app

RUN npm install express
RUN npm install body-parser

COPY sample.js .

CMD ["node","sample.js"]


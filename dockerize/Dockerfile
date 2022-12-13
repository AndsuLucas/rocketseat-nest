FROM node:19.2.0-alpine3.16

WORKDIR /usr/src/app
RUN mkdir -p ./.npm/_cacache/_logs
RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

RUN chmod -R 777 ./dist
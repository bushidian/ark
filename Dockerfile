From node:latest

MAINTAINER Bushidian

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

VOLUME ['/var/www']

RUN npm install

RUN npm install typescript -g

EXPOSE $PORT





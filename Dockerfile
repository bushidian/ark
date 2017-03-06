From node:latest

MAINTAINER Bushidian


ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

VOLUME ['/var/www']

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]

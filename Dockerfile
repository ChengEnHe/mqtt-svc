FROM node:6

ENV NODE_ENV development
COPY ./ /home/node/app
WORKDIR /home/node/app

# port 443 for node js
EXPOSE 1883

CMD node ./server.js
FROM node:lts-alpine

# Files
COPY ./server.js /home/node/app/server.js

# Dependencies
COPY ./package.json /home/node/app/package.json
COPY ./package-lock.json /home/node/app/package-lock.json

WORKDIR /home/node/app

RUN npm install

EXPOSE 3100

CMD ["node", "server.js"]
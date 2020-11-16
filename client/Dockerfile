FROM node:lts-alpine

# Directories
COPY ./src /home/node/app/src
COPY ./public /home/node/app/public

# Dependencies
COPY ./package.json /home/node/app/package.json
COPY ./package-lock.json /home/node/app/package-lock.json

WORKDIR /home/node/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
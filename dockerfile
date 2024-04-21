ARG WORKSPACE=/home/node/app

FROM node:20-alpine

ARG WORKSPACE

WORKDIR $WORKSPACE

COPY . $WORKSPACE

RUN npm install -g npm@latest && npm install --production

CMD [ "npm", "run", "build" ]

FROM node:10.15.3-alpine

WORKDIR /mycv

RUN apk update && apk add --no-cache git

COPY package.json yarn.lock /mycv/

RUN yarn install

EXPOSE 3000

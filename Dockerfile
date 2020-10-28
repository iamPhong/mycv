FROM node:10.15.3-alpine

WORKDIR /mycv

COPY package.json yarn.lock /mycv/

RUN yarn install

EXPOSE 3000

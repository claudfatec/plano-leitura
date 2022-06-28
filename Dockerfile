FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm install @mui/material @emotion/react @emotion/styled --save

USER root

WORKDIR /home/node/app
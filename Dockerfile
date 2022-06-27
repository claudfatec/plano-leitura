FROM minhhien1996/material-ui-crud-react

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app


FROM node:10-alpine

ARG VERSION="12345678"

WORKDIR /app
COPY package.json .
RUN npm install

COPY index.js .

CMD ["node", "index.js"]

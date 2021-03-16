FROM node:10-alpine

WORKDIR /app
COPY package.json .
RUN npm install

COPY ./templates ./templates
COPY index.js .

CMD ["npm", "start"]

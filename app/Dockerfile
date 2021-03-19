FROM node:10-alpine

WORKDIR /app
COPY package.json .
RUN npm install

COPY ./views ./views
COPY ./images ./images
COPY index.js .

CMD ["npm", "start"]

FROM node:16-alpine

WOKDIR /app

COPY package*.json .

RUN npm i

COPY . . 

CMD ["npm", "run", "dev"]
FROM node:12

#create app directory
WORKDIR /usr/src/tw-app

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
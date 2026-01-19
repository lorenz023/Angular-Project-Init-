FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli
RUN npm install
RUN ng build

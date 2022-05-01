FROM node:alpine
COPY . /app
WORKDIR /app
VOLUME [ "/data" ]

RUN npm install -g npm@8.8.0


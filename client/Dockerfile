FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app
RUN cd /src/app && npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
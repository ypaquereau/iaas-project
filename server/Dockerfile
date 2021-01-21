FROM node:latest

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app
RUN cd /src/app && npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD [ "npm", "start" ]
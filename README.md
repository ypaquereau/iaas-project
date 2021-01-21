# MEVN App

Simple app for register & login users with JWT, using VueJS, NodeJS, Express & MongoDB

## Public IP

* Front : <http://35.204.99.211:8080>
* Back  : <http://34.90.153.190:3000>

## API

* Register `POST /user/register`
    * Exemple
```json
{
	"email": "yoann.paquereau@gmail.com",
	"name": "Yoann Paquereau",
	"password": "password"
}
```
will return
```json
{
  "data": {
    "_id": "6009dceda5d85b001fa39ee3",
    "name": "Yoann Paquereau",
    "email": "yoann.paquereau@gmail.com",
    "password": "$2a$08$WCvyyiP2ET4kkO5XbsoTeOpXwQRPhkUJyGg5h68bCGTeh3kO9wx3y",
    "tokens": [
      {
        "_id": "6009dceda5d85b001fa39ee4",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGNlZGE1ZDg1YjAwMWZhMzllZTMiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU5MTE3fQ.ocUT__ZjOQU3oP6Nyp2ySgPTfLxKy-eaIy_RAgrp4dQ"
      }
    ],
    "__v": 1
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGNlZGE1ZDg1YjAwMWZhMzllZTMiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU5MTE3fQ.ocUT__ZjOQU3oP6Nyp2ySgPTfLxKy-eaIy_RAgrp4dQ"
}
```

* Login `POST /user/login`
  * Exemple
```json
{
	"email": "yoann.paquereau@gmail.com",
	"password": "password"
}
```
will return
```json
{
  "user": {
    "_id": "6009dac8a5d85b001fa39ee0",
    "name": "Yoann Paquereau",
    "email": "yoann.paquereau@gmail.com",
    "password": "$2a$08$npZL47O0rRFZc59T5OEqmO0LW5i4HZLRDcO/ZbGy0oulaUzz9fUSK",
    "tokens": [
      {
        "_id": "6009dac8a5d85b001fa39ee1",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGFjOGE1ZDg1YjAwMWZhMzllZTAiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU4NTY4fQ.U70oYoreZ-ilGBRuHR9S60tiSSymIUUzTTUsJuJHvJA"
      },
      {
        "_id": "6009dad0a5d85b001fa39ee2",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGFjOGE1ZDg1YjAwMWZhMzllZTAiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU4NTc2fQ.7A8Oox550yY-PsmIoT0eJnOpxtlfec1ZrWKGJlsroZg"
      },
      {
        "_id": "6009dddba5d85b001fa39ee5",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGFjOGE1ZDg1YjAwMWZhMzllZTAiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU5MzU1fQ.VBXnlgGBiMiIojy-CuXHl1xte0-bQGe-eJToKdeYmqo"
      },
      {
        "_id": "6009dde2a5d85b001fa39ee6",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGFjOGE1ZDg1YjAwMWZhMzllZTAiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU5MzYyfQ.DVzi6jVervSIRUd_ukrw2ZismPXDyQjglNDblJzdux4"
      }
    ],
    "__v": 4
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA5ZGFjOGE1ZDg1YjAwMWZhMzllZTAiLCJuYW1lIjoiWW9hbm4gUGFxdWVyZWF1IiwiZW1haWwiOiJ5b2Fubi5wYXF1ZXJlYXVAZ21haWwuY29tIiwiaWF0IjoxNjExMjU5MzYyfQ.DVzi6jVervSIRUd_ukrw2ZismPXDyQjglNDblJzdux4"
}
```

## Limitations
* Currently, we didn't check if an email already exists in database, so we can have duplicate users, and login cannot working
* We can only check if we're logged in with front if we have access to homepage, we still can register or logged in
* In `client.deployment.yaml`, the API_URL is written in plain text, so if the ip adress changed (and it will changed), the app doesn't work anymore
\
![Alt Text](https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif)

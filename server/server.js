const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongodb = require('./db/mongo');

mongodb.initClientDbConnection();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const userRoutes = require("./routers/user"); //bring in our user routes
app.use("/user", userRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});

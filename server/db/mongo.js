const mongoose = require("mongoose");
require('dotenv').config();

const clientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "data",
};

exports.initClientDbConnection = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO, clientOptions);
    console.log("Connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

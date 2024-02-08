const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected: ${connect.connection.host}`.green
    );
  } catch (error) {
    console.log(`Error in Mongoose ${error}`.red);
  }
};

module.exports = connectDB;
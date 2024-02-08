const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/Db");
const studentRoute = require("./routes/studentRoute");
const morgan = require("morgan");
const path = require("path");

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./student-data/build")));

const PORT = process.env.PORT || 8080;

app.use("/ranks/api", studentRoute);
app.use("*", (req, res) => {
  res.sendfile(path.join(__dirname, "./student-data/build/index.html"));
});

app.get("/", (req, res) => {
  res.send({ message: "Hello This is Ranks Team (:" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green);
});

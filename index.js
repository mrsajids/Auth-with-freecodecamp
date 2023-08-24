const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
// const { MONGO_URL, PORT } = process.env
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const MONGO_URL="mongodb+srv://sajeed:sajeed123@cluster0.ivnebch.mongodb.net/authentication?retryWrites=true&w=majority"
const PORT = 4000

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.use(cors());

app.use(express.json());

app.use(cookieParser());


app.use("/", authRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


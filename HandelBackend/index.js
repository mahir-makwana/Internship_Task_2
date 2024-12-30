require("dotenv").config();
const express = require("express");
const connectDB = require("./config/dbconfig");
const routes = require("./router/router");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: process.env.CLIENT_URI,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Connected DB successfully");
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });

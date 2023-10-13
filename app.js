// index.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from the .env file or default to 3000

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend of your car maintenance app!" });
});

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

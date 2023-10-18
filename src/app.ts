// index.ts

import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from the .env file or default to 3000

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the backend of your car maintenance app!",
  });
});

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

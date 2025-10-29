import express from "express";
import "dotenv/config";

const serverPort = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.listen(serverPort, () => {
  console.log(`Server running on ${serverPort}`);
})

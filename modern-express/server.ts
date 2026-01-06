import express from "express";
import userRouter from "./routes/user.route";

const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.listen(8000, () => {
  console.log("Server is running");
})

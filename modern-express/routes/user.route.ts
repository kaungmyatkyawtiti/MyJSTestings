import { Router } from "express";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.json({ message: "user route" })
})

export default userRouter;

const express = require("express");
const app = express();

const prisma = require("./prismaClient.js");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { userRouter } = require("./routers/user.js");
app.use("/", userRouter);

const { contentRouter } = require("./routers/content.js");
app.use("/content", contentRouter);

app.get("/info", (req, res) => {
  res.json({ msg: "Yaycha API" });
});

const server = app.listen(8000, () => {
  console.log("Yaycha API started at 8000...");
})

const gracefulShutdown = async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log("Yaycha API closed");
    process.exit(0);
  })
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

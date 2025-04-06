import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const app = express();

console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 2000");
});

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hellow" });
});

app.use("/helath", (req, res) => {
  res.status(200).json({ message: "Hello healthy" });
});

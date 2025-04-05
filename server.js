import express from "express";

const app = express();

app.listen(2000, () => {
  console.log("Server listening on port 2000");
});

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hellow" });
});

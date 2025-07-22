import express, { json } from "express";
import jwt from "jsonwebtoken";

const app = express();

app.post("./signup", (req, res) => {});

app.post("./signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    json,
  });
});

app.post("./room", (req, res) => {
  res.json({
    roomId: 123,
  });
});

app.listen(3001);

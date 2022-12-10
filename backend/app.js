import "dotenv/config";
import cors from "cors";

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

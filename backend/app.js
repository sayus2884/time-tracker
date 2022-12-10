import "dotenv/config";
import cors from "cors";

const express = require("express");
const app = express();
const port = 8080;

app.use(cors());

app.get("/users", (req, res) => {
  const users = [{ name: "John Doe", company: "Anon", id: 1 }];

  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

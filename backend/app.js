import 'dotenv/config'
import routes from "./routes";
import cors from "cors";

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
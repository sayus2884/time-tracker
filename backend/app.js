import "dotenv/config";
import cors from "cors";
import routes from "./routes";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/users", routes.users);

app.use("/projects", routes.projects);

app.use("/tasks", routes.tasks);

app.use((error, req, res, next) => {
  if (error.stack) res.status(500).send({ message: error.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

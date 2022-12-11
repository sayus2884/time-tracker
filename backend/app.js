import "dotenv/config";
import cors from "cors";
import routes from "./routes";

const express = require("express");
const app = express();
const port = 8080;

app.use(cors());

app.use("/users", routes.users);

app.use("/projects", routes.projects);

app.get("/tasks", (req, res) => {
  const tasks = [
    {
      id: 12,
      description: "Test Project",
      hours: 5,
      date: new Date(),
      projectId: 12,
    },
  ];

  res.send(tasks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

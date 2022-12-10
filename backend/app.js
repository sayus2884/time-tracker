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

app.get("/projects", (req, res) => {
  const projects = [{ name: "Test Project", id: 12 }];

  res.send(projects);
});

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

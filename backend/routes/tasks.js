import { Router } from "express";
import { getTasks, insertTask } from "../db/Tasks";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await getTasks();

  res.send(tasks);
});

router.post("/", async (req, res) => {
  const { description, hours, userId } = req.body;
  const task = { description, hours, userId };

  try {
    const newTask = await insertTask(task);

    res.json(newTask);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;

import { Router } from "express";
import { getTasks, insertTask } from "../db/Tasks";

const router = Router();

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await getTasks();

  res.send(tasks);
});


// Insert new task
router.post("/", async (req, res, next) => {
  const { description, hours, userId, projectId } = req.body;
  const task = { description, hours, userId, projectId };

  try {
    const newTask = await insertTask(task);

    res.json(newTask);
  } catch (error) {
    next(error);
  }
});

export default router;

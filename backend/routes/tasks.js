import { Router } from "express";
import { getTasks, insertTask, deleteTask } from "../db/Tasks";

const router = Router();

// Get all tasks
router.get("/", async (req, res) => {
  const { projectId } = req.query;

  const selector = { projectId };

  const tasks = await getTasks(selector);

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

// Delete task by id
router.delete("/:taskId", async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const tbdTask = await deleteTask(taskId);

    res.json(tbdTask);
  } catch (error) {
    next(error);
  }
});

export default router;

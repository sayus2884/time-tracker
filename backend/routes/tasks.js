import { Router } from "express";
import { getTasks } from "../db/Tasks";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await getTasks();

  res.send(tasks);
});

export default router;

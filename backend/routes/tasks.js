import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
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

export default router;

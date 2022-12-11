import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const projects = [
    { name: "Test Project 1", id: 12 },
    { name: "Test Project 2", id: 123 },
  ];

  res.send(projects);
});

export default router;

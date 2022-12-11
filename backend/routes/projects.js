import { Router } from "express";
import { getProjects } from "../db/Projects";

const router = Router();

//Get all projects
router.get("/", async (req, res) => {
  const projects = await getProjects();

  res.send(projects);
});

export default router;

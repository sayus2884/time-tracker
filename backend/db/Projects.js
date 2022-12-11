import { getDatabase } from "./mongo";

const collectionName = "Projects";

export const getProjects = async () => {
  const db = await getDatabase();
  const selector = {};

  const projects = await db.collection(collectionName).find(selector).toArray();

  return projects;
};

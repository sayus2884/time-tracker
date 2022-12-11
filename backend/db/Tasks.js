import { getDatabase } from "./mongo";

const collectionName = "Tasks";

export const getTasks = async () => {
  const db = await getDatabase();
  const selector = {};

  const tasks = await db.collection(collectionName).find(selector).toArray();

  return tasks;
};

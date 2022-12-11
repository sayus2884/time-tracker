import { getDatabase } from "./mongo";

const collectionName = "Tasks";

export const getTasks = async () => {
  const db = await getDatabase();
  const selector = {};

  const tasks = await db.collection(collectionName).find(selector).toArray();

  return tasks;
};

export const insertTask = async (task) => {
  const db = await getDatabase();

  if (!task.description) throw new Error("task.description is required.");
  if (!task.hours) throw new Error("task.hours is required.");
  if (!task.userId) throw new Error("task.userId is required.");

  const newTask = db
    .collection(collectionName)
    .insertOne({
      ...task,
      createdAt: new Date(),
    })
    .then((res) => db.collection(collectionName).findOne({ _id: res.insertedId }));

  return newTask;
};
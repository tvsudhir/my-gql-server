import listTodos from "../../../todos/listTodos.js";

export default async function listToDos() {
  const result = await listTodos();
  return result;
};

import opUpdateTodo from "../../../todos/updateTodo.js";

export default async function updateToDo(parent, args, context) {
  const result = await opUpdateTodo(args.todo);
  return result;
};

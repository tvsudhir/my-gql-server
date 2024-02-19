import createTodo from "../../../todos/createTodo.js";

export default async function createToDo(parent, args, context) {
  const result = await createTodo(args.todo);
  return result;
};

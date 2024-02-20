import opGetToDo from "../../../todos/getToDo.js";

export default async function getToDo(parent, args, context) {
  const result = await opGetToDo(args.todoId);
  return result;
}

export default async function deleteToDo(parent, args, { datasources }) {
  const result = await datasources.todos.deleteToDo(args.todoId);
  return result;
}

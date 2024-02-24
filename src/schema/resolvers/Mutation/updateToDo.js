export default async function updateToDo(parent, args, { datasources }) {
  const result = await datasources.todos.updateTodo(args.todo);
  return result;
}

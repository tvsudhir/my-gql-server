export default async function createToDo(parent, args, { datasources }) {
  const result = await datasources.todos.createTodo(args.todo);
  return result;
}

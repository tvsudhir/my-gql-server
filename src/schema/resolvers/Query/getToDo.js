export default async function getToDo(parent, args, { datasources }) {
  const result = await datasources.todos.getToDo(args.todoId);
  return result;
}

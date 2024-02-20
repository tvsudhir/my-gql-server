export default async function listToDos(parent, args, { datasources }) {
  const result = await datasources.todos.listTodos();
  return result;
};

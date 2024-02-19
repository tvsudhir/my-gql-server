import { pSql } from '../datastore/postgres.js';

export default async function createTodo({ todoId, name: todoName, text }) {
  const finalTodoId = todoId ?? Date.now();
  const [result] = await pSql`
    insert into todos (todoId, name, text)
    values (${finalTodoId}, ${todoName}, ${text})

    returning *
  `;

  return {
    todoId: result.todoid,
    name: result.name,
    text: result.text,
  };
}

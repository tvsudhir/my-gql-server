import { pSql } from '../datastore/postgres.js';

export default async function getToDo(todoId) {
  const [result = {}] = await pSql`
    select
      todoid as todoId,
      name,
      text
    from todos
    where todoId = ${todoId}
  `;

  return {
    todoId: result.todoid,
    name: result.name,
    text: result.text,
  };
}

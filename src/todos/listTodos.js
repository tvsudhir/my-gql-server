import { pSql } from '../datastore/postgres.js';

export default async function listTodos() {
  const result = await pSql`
    select
      todoid as todoId,
      name,
      text
    from todos
    order by name;
  `;

  return result.map((t) => ({
    todoId: t.todoid,
    name: t.name,
    text: t.text,
  }));
}

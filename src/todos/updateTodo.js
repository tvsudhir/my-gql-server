import { pSql } from '../datastore/postgres.js';

export default async function updateTodo({ todoId, name: todoName, text }) {
  const [result] = await pSql`
    update todos
    set
      name = ${todoName},
      text = ${text}
    where todoid = ${todoId}

    returning *
  `;

  console.log('result', result);

  return {
    todoId: result.todoid,
    name: result.name,
    text: result.text,
  };
}

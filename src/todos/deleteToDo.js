import { pSql } from '../datastore/postgres.js';

export default async function deleteToDo(todoId) {
  try {
    const [result] = await pSql`
      delete from todos
      where todoid = ${todoId}

      returning *
    `;

    console.log('deleted todo', result);
    return { status: 'SUCCESS' };
  } catch (err) {
    return { status: 'FAIL', err: err.message };
  }
}

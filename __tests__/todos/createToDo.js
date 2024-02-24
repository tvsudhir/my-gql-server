import { jest, it, expect } from '@jest/globals';
import createToDo from '../../src/todos/createTodo.js';
import * as postgres from '../../src/datastore/postgres.js';

jest.mock('../../src/datastore/postgres.js');

it('checking', async () => {
  postgres.pSql.mockResolvedValue(
    [
      { todoid: 'td1', name: 'test-1', text: 'some text' },
    ],
  );

  const result = await createToDo({ todId: 'td1', name: 'test-1', text: 'some text' });

  expect(result).toEqual({ todoId: 'td1', name: 'test-1', text: 'some text' });
});

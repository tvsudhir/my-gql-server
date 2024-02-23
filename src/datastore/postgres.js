import postgres from 'postgres';

export function connect() {
  return postgres({
    host: 'localhost',
    port: 5432,
    database: 'my-app',
    // username: 'test',
    // password: 'test',
  });
}

export const pSql = connect();

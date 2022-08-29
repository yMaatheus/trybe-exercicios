const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  const query = '';
  const [{ insertId }] = await connection.execute(query, [firstName, lastName, email, password]);

  return { insertId, firstName, lastName, email, password };
}
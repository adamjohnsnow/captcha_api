const pg = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/captcha_api_dev'

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, main VARCHAR(100) not null, solution VARCHAR(100), gameType VARCHAR(40) not null)');
  query.on('end', () => { client.end(); });

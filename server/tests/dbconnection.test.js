const mongoose = require('mongoose');
const dbconnection = require('../model/database/dbconnection/dbconnection');

describe('Test database connection env, status and name', () => {
  let db;

  beforeAll(async () => {
    db = await mongoose.connection;
  });

  afterAll(async (done) => {
    await mongoose.disconnect(done);
  });

  test('Should fail when env not test ', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  test('Database connection is active', async () => {
    const connectionState = await db.readyState;
    expect(connectionState).toBe(1);
  });

  test('Database in use is test database', async () => {
    const dbName = await db.name;
    expect(dbName).toBe('drinkstestdb');
  });
});

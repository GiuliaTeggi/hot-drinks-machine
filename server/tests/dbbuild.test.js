// const mongoose = require('mongoose');
// const dbconnection = require('../model/database/dbconnection/dbconnection');
// const dbbuild = require('../model/database/dbbuild/dbbuild');

// describe('Test dbbuild', () => {
//   let db;

//   beforeAll(async (done) => {
//     db = await mongoose.connection;

//     await mongoose.connection.db.dropCollection('recipes');
//     return done();
//   });

//   afterAll(async (done) => {
//     await mongoose.disconnect();
//     return done();
//   });

//   test('Dbbuild adds collection recipes to database', () => {
//     const collection = db.collections;
//     expect(collection).toHaveProperty('recipes');
//   });
// });

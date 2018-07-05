// const mongoose = require('mongoose');
// const dbconnection = require('../model/database/dbconnection/dbconnection');
// const dbbuild = require('../model/database/dbbuild/dbbuild');
// const { getNames, getSteps } = require('../model/queries/recipeQueries');

// describe('Test database queries', () => {
//   let db;

//   beforeAll(async (done) => {
//     db = await mongoose.connection;
//     await mongoose.connection.db.dropCollection('recipes');
//     return done();
//   });

//   afterAll(async (done) => {
//     await mongoose.disconnect(done);
//   });

//   test('GetNames function finds all recipe names', async () => {
//     const expected = [{ name: 'Lemon Tea' },
//     { name: 'Coffee' },
//     { name: 'Chocolate' }];

//     const names = await getNames();

//     expect(names).toEqual(expected);
//   });
// });

const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => console.log('DB CONNECTION SUCCESS'))
  .catch(err => console.log('Error establishing to db', err));

module.exports = connection;
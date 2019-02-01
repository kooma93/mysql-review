const model = require('../database/model.js');

module.exports = {
  get: (req, res) => {
    const{ listName } = req.query;
    model.Todo.findAll({
      where: {
        list_name: listName
      }
    })
    .then(todos => {
      if (todos) {
        res.status(200).send(todos);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => res.status(404).send(err));
    console.log('IN GET');
    // res.status(200).end();
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    model.Todo.create({
      todo: todo,
      list_name: listName
    })
    .then(() => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(404).send(err);
    })
    console.log('IN POST');
    // res.status(201).end();
  },
  delete: (req, res) => {
    const { index } = req.query;
    model.Todo.destroy({
      where: { id: index }
    })
    .then(() => {
      res.status(202).end();
    })
    .catch(err => {
      res.status(404).end();
    });
    console.log('IN DELETE');
    // res.status(202).end();
  }
}
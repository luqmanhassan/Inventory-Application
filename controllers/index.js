const Category = require('../models/category.js');
const ItemModel = require('../models/item.js');

const Home = (req, res) => {
  Category.find()
    .then((result) => {
      ItemModel.find().then((response) => {
        res.render('index', {
          title: 'IVEA',
          categorys: result,
          items: response,
        });
      });
    })
    .catch((err) => res.send(err));
};

module.exports = {
  Home,
};

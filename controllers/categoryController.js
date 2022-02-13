const {render} = require('../app.js');
const Category = require('../models/category.js');
const ItemModel = require('../models/item.js');

// Category Controllers
const CategoryCreate = (req, res) => {
  res.render('category-create', {title: 'Category Create'});
};

const CategoryDelete = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndDelete(id)
    .then((result) => {
      res.json({redirect: '/'});
    })
    .catch((err) => console.log(err));
};

// Category Post Reqs
const PostCategoryCreate = (req, res) => {
  const category = new Category(req.body);

  category
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.redirect('/');
};

const CategoryId = (req, res) => {
  const id = req.params.id;

  Category.findById(id).then((result) => {
    ItemModel.find({category: id}).then((response) => {
      res.render('category', {
        title: 'Category ID',
        categorys: result,
        items: response,
      });
    });
  });
};

module.exports = {
  CategoryCreate,
  CategoryDelete,
  PostCategoryCreate,
  CategoryId,
};

/*

const CategoryId = (req, res) => {
  const id = req.params.id;
  Category.findById(id).then((result) => {
    res.render('category', {title: 'Category ID', categorys: result});
  });
};

*/

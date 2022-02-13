const ItemModel = require('../models/item.js');
const Category = require('../models/category.js');

const Id = (req, res) => {
  const id = req.params.id;
  ItemModel.findById(id).then((result) => {
    res.render('item', {title: 'Item', item: result});
  });
};

const Create = (req, res) => {
  Category.find().then((result) => {
    res.render('item-create', {title: 'item create', categorys: result});
  });
};

const PostCreate = (req, res) => {
  const item = new ItemModel(req.body);

  item
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.redirect('/');
};

const Update = (req, res) => {
  const id = req.params.id;

  Category.find().then((result) => {
    res.render('item-update', {
      title: 'item update',
      categorys: result,
      id,
    });
  });
};

const PutUpdate = (req, res) => {
  const id = req.params.id;
  console.log(req.body, 'Your in Put');
  ItemModel.findByIdAndUpdate(id, req.body)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  res.redirect('/');
};

const Delete = (req, res) => {
  const id = req.params.id;
  ItemModel.findByIdAndDelete(id)
    .then((result) => {
      res.json({redirect: '/'});
    })
    .catch((err) => console.log(err));
};

module.exports = {
  Id,
  Create,
  PostCreate,
  Update,
  Delete,
  PutUpdate,
};

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/categoryController.js');

// Category Create / Delete pages
router.get('/create', Controllers.CategoryCreate);
router.delete('/delete/:id', Controllers.CategoryDelete);

router.get('/:id', Controllers.CategoryId);

router.post('/create', Controllers.PostCategoryCreate);

module.exports = router;

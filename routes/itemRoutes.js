const express = require('express');
const router = express.Router();
const Controller = require('../controllers/itemController.js');

/* GET item page. */
router.get('/update/:id', Controller.Update);
router.get('/create', Controller.Create);

router.get('/:id', Controller.Id);

router.post('/create', Controller.PostCreate);

router.delete('/delete/:id', Controller.Delete);

router.post('/update/:id', Controller.PutUpdate);

module.exports = router;

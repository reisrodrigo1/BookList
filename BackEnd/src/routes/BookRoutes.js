const express = require('express');
const router = express.Router();

const BookController = require('../controller/BookController');

router.post('/', BookController.create);
router.put('/:id', BookController.update);

router.get('/all/:macaddress', BookController.all);
router.get('/:id', BookController.getById);
router.get('/search/:name', BookController.getByName);

router.delete('/:id', BookController.delete);

module.exports = router;    
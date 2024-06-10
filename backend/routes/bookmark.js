const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/bookingController');

router.get('/', propertyController.getAllBookmarks);
router.get('/:id', propertyController.getBookmark);
router.post('/', propertyController.createBookmark);
router.delete('/:id', propertyController.deleteBookmark);

module.exports = router;

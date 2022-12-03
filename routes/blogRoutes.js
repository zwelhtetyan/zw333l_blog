const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.index);

router.post('/', blogController.create_post);

router.get('/create', blogController.create_get);

router.get('/blogs/:id', blogController.detail);

router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;

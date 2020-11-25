var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('index', { title: 'MyBook', header: 'Home Page' });
});

router.get('/newPost', function(req, res, next) {
  res.render('form', { title: 'MyBook', header: 'Create New Post' });
});


module.exports = router;

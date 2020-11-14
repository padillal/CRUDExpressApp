var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const content = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

router.get('/', function(req, res, next) {
  res.render('index', { messages: content , title: 'HOME PAGE', header: 'CONTENT LIST' });
});

module.exports = router;

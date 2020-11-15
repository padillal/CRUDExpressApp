var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME PAGE', header: 'CONTENT LIST' });
});

console.log("Running Port: " + 3000);
module.exports = router;

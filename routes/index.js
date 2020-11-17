var express = require('express');
var router = express.Router();

const numarray = ['1','2','3'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: numarray, title: 'Calculator - Home', header: 'Simple Express Calculator' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { messages: numarray, title: 'Calculator - Number Addition', header: 'Simple Express Calculator' });
});

router.get('/mult', function(req, res, next) {
  res.render('mult', { messages: numarray, title: 'Calculator - Number Multiplication', header: 'Simple Express Calculator' });
});

router.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Calculator - Insert Number', header: 'Simple Express Calculator' });
});

router.post('/insert', function(req, res, next) {
  let count = req.body;
  let newNum = count.text;
  let newArray = {
    text:newNum
  };
  numarray.push(newArray);
  res.redirect('/');
});

router.get('/remove',function(req,res,next){
  numarray.pop();
  res.render('index', { messages: numarray , title: 'Calculator - Number Removed', header: 'Simple Express Calculator' })
});



// router.get('/add/:num1/:num2', function (req, res) {
//   var num1 = parseInt(req.params.num1)
//   var num2 = parseInt(req.params.num2)
//   var sum = (num1 + num2).toString()
//   res.send(sum)
// })

console.log("Running on localhost:" + 3000);
module.exports = router;

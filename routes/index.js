var express = require('express');
var router = express.Router();

const profile = [
   {
     name: "John Smith",
     status: "I feel great!",
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: profile , title: 'MyBook', header: 'Home Page' });
});

/*GET new page*/
router.get('/newPost', function(req, res, next) {
  res.render('form', { title: 'MyBook', header: 'Create New Post' });
});


router.post('/newPost', function(req, res, next) {
  let item = req.body;
  let nameItem = item.name;
  let statusItem = item.status;

  let newPost = {
    name:nameItem,
    status:statusItem,
  }

  profile.push(newPost);
  res.redirect('/');

});

router.get('/delete',function(req,res,next){
  profile.pop();
  res.render('index', { content: profile , title: 'MyBook', header: 'A post has been removed' })
});

module.exports = router;

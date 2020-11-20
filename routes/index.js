var express = require('express');
var router = express.Router();
var uniqid = require('uniqid');

const profile = [
   {
     name: "John Smith",
     status: "I feel great!",
     id:uniqid()
   },
   {
     name: "Jane Doe",
     status: "Feeling hungry...need food.",
     id: uniqid()
   }
];

/* GET home page. VIEW */
router.get('/', function(req, res, next) {
   res.render('index', { content: profile , title: 'MyBook', header: 'Home Page' });
});

router.get('/post/:id', function(req, res, next) {
  let id = req.params.id;
  let singlePost;
  for(let i = 0; i < profile.length; i++){
    if(profile[i].id == id){
      singlePost = profile[i];
    }
  }
  res.send(singlePost);
});


/*GET new page VIEW*/
router.get('/newPost', function(req, res, next) {
  res.render('form', { title: 'MyBook', header: 'Create New Post' });
});

router.post('/newPost', function(req, res, next) {
  let item = req.body;
  let nameItem = item.name;
  let statusItem = item.status;
  let idItem = item.id;

  let newPost = {
    name:nameItem,
    status:statusItem,
    id: uniqid()
  }

  profile.push(newPost);
  res.send("Return to localhost:"+3000+" to see new post!");

});

router.put('/update/:id', function(req, res, next) {
 let id = req.params.id;
 let name = req.body.name;
 let status = req.body.status;

 let updatePost =  {
   name:name,
   status:status,
   id: id
 };

 for(let i = 0; i < profile.length; i++){
   if(profile[i].id == id){
     profile[i] = updatePost;
   }
 }
 res.send(updatePost);
});

router.get('/delete/:id',function(req,res,next){
  let id = req.params.id;
  for(let i = 0; i < profile.length; i++){
    if(profile[i].id == id){
      profile.splice(i,1);
    }
  }
  res.send("Post Removed! Return to localhost:"+3000);
});

module.exports = router;

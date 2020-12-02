var express = require('express');
var router = express.Router();
var uniqid = require('uniqid');

const Profile = require("./../models/Profile");
const profileControl = require("../controllers/profileControllers");

//Create a new profile
router.post('/', profileControl.create_profile);

//Read all profiles
router.get('/', profileControl.get_profiles);

//Read one profiles
router.get('/:profileId', profileControl.get_profile);

//Update one profile
router.put('/:profileId', profileControl.update_profile);

//Delete all profiles
router.delete('/', profileControl.delete_profiles);


//------------------------OLD APIs METHOD BELOW------------------------

//
// const profiles = [
//    {
//      name: "John Smith",
//      status: "I feel great!",
//      id:uniqid()
//    },
//    {
//      name: "Jane Doe",
//      status: "Feeling hungry...need food.",
//      id: uniqid()
//    }
// ];

//CREATE NEW POST
// router.post('/newPost', function(req, res, next) {
  // Create new TV Show Object using the incoming data
  // let new_profile = new Profile(req.body);
  // Assign a unique ID to this object
  // new_profile.id = uniqid();
  // Now save the object into the Database
  // new_profile.save(function(err, created_profile) {
    // If there is an error send back the error object
    // if (err)
    //   res.send(err);
    // Otherwise send back the new tv show object
//     res.json(new_profile);
//   });
// });

// GET SINGLE PROFILE BY ID?
// router.get('/post/:id', function(req,res,next){
//   let id = req.params.id;
//   Profile.find({id: id}, function(err, profiles){
//     if(err){
//       res.send(err);
//     }
//     res.json(profiles);
//   });
// });

// router.get('post/:id', function(req,res,next){
//   let one = req.params.one;
//   Profile.findOne({post: one}, function(err, profile){
//     if(err){
//       res.send(err);
//     }
//     res.json(profile);
//   });
// });

//DELETE Post
// router.delete('/', function(req,res,next){
//   Profile.remove({},err => {
//     if(err){
//       res.send(err);
//     }
//     res.json({});
//   });
// });

// router.get('/post/:id', function(req, res, next) {
//   let id = req.params.id;
//   let singlePost;
//   for(let i = 0; i < profiles.length; i++){
//     if(profiles[i].id == id){
//       singlePost = profiles[i];
//     }
//   }
//   res.send(singlePost);
// });
//
//
// router.put('/update/:id', function(req, res, next) {
//  let id = req.params.id;
//  let name = req.body.name;
//  let status = req.body.status;
//
//  let updatePost =  {
//    name:name,
//    status:status,
//    id: id
//  };
//
//  for(let i = 0; i < profiles.length; i++){
//    if(profiles[i].id == id){
//      profiles[i] = updatePost;
//    }
//  }
//  res.send(updatePost);
// });
//
// router.get('/delete/:id',function(req,res,next){
//   let id = req.params.id;
//   for(let i = 0; i < profiles.length; i++){
//     if(profiles[i].id == id){
//       profiles.splice(i,1);
//     }
//   }
//   res.send("Post Removed! Return to localhost:"+3000);
// });

module.exports = router;

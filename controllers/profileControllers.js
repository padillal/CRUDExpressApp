let mongoose = require('mongoose');
// Unique Id Generator
var uniqid = require('uniqid');
// Import TV Show Model
const Show = require("./../models/Profile");

// Create new profile
exports.create_profile = function(req, res) {
  let new_profile = new Profile(req.body);
  new_profile.id = uniqid();
  //save into database
  new_profile.save(function(err, created_profile) {
    if (err)
      res.send(err);
    res.json(new_profile);
  });
};

// Get all profiles
exports.get_profiles = function(req, res) {
  Profile.find({}, function(err, profiles) {
    if (err)
      res.send(err);
    res.json(profiles);
  });
};

//Get single profile
exports.get_profile = function(req, res) {
  let profileId = req.params.profileId;
  Profile.findOne({id: profileId}, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

// Delete all profiles
exports.delete_profiles = function(req, res) {
  Show.deleteMany({}, function(err, data) {
    if (err)
      res.send(err);
    res.send({Message: "Success", data: data});
  });
};

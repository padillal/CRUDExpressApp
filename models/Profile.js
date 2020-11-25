const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const ProfileSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    text: true
  },
  status: {
    type: String,
    required: true,
    text: true
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;

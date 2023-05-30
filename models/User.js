const { Schema, model } = require('mongoose');
const thoughtSchema = require("./Thought")

const userSchema = new Schema(
  {
    username: {
      type: String, 
      required: true,
      unique: true,
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      validate: [
        isEmail
      ],
      // match to validate email
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: {
      reference: [thoughtSchema],
    },
    friends: [userSchema],
  }, 
  { 
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    friendCount: {
    virtuals: true,
    }
  }
);



const User = model("user", userSchema);
module.exports = User;
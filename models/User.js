const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

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
      // match to validate email
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
   toJSON:{
    virtuals:true
   }, 
   id: false
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})

const User = model("User", userSchema);
module.exports = User;

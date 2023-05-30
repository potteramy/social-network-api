const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      min_length:1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
  {
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    reactionCount:{
      virtuals: true
    },
  },
)



const Thought = model("thought", thoughtSchema);
module.exports = Thought;
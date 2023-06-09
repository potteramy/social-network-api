const { Schema } = require('mongoose');

const reactionSchema = new Schema (
  {
    reactionBody: {
      type: String,
      required: true,
      max_length: 208,
    },
    username: {
      type: String,
      required: true,
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
    id: false
  },
)

module.exports = reactionSchema;
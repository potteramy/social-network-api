const {ObjectId} = require("mongoose").Types;
const { Thought, Reaction} = require("../models");

module.exports = {
//Get all
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find();
      res.json(thoughtData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  //Post new thought
  async createThought(req, res) {
    try {
      const thoughtData = await Thought.create(req.body);
      res.json(thoughtData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  //Get by id
  async getSingleThought(req, res) {
    try {
      const thoughtData = await Thought.findById(req.params.thoughtId)
      res.json(thoughtData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  //Put update by id
  async updateThought (req, res) {
    try {
      const thoughtData = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body, 
        {new: true}
      );
      if(!thoughtData){
        res.json({message: "no thought with that ID"})
      }
      res.json(thoughtData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
//delete remove by id
  async deleteThought (req, res) {
    try {
      const thoughtData= await Thought.findByIdAndDelete(
        req.params.thoughtId
      );
      if(!thoughtData){
        res.json({message: "no thought with that ID"})
      }
      res.json({message: "success!"})
    } catch (err) {
      res.status(500).json(err)
    }
  },
//`POST` to create a reaction stored in a single thought's `reactions` array field
  async addReaction (req, res) {
    try{
      const thoughtData = await Thought.findOneAndUpdate(
         req.params.thoughtId,
        { $addToSet: { reactions: req.body} },
        { runValidators: true, new: true }
      );
      if(!thoughtData){
        res.json({message: "no thought with that ID"})
      }
      res.json(thoughtData)
    } catch (err){
        res.status(500).json(err)
    }
  },
// `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
  async deleteReaction (req, res) {
    try{
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.params.reactionId} },
        { runValidators: true, new: true }
      );
      if(!thoughtData){
        res.json({message: "no thought with that ID"})
      }
      res.json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
  }
};





const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const userData = await User.find();
      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId })
      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        req.params.userId ,
        { $addToSet: { friends: { _id: req.params.userId } } },
        { runValidators: true, new: true }
      );

      if(!userData){
        res.json({message: "no user with that ID"})
      }

      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },

   async deleteFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id:req.params.userId} ,
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if(!userData){
        res.json({message: "no user with that ID"})
      }

      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  //Put update by id
  async updateUser (req, res) {
    try {
      const userData = await User.findByIdAndUpdate(
        req.params.userId,
        req.body, 
        {new: true}
      );
      if(!userData){
        res.json({message: "no user with that ID"})
      }
      res.json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
  },
//delete remove by id
  async deleteUser (req, res) {
    try {
      const userData= await User.findByIdAndDelete(
       req.params.userId
      );
      if(!userData){
        res.json({message: "no user with that ID"})
      }
      res.json({message: "success!"})
    } catch (err) {
      res.status(500).json(err)
    }
  }
};








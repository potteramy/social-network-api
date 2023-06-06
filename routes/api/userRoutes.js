const router = require("express").Router();
const { getUsers, createUser, updateUser, deleteUser, addFriend, deleteFriend, getSingleUser } = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser)
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
router.route("/api/users/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);
module.exports = router;

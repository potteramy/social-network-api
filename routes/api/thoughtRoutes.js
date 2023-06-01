const router = require("express").Router();
const {getThoughts, createThought, updateThought, deleteThought, addReaction, deleteReaction} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought)
router.route("/:id").put(updateThought).delete(deleteThought);
router.route("/api/thoughts/:thoughtId/reactions").post(addReaction).delete(deleteReaction);
module.exports = router;
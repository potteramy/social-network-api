const router = require("express").Router();
const {getThoughts, createThought, updateThought, deleteThought} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought)
router.route("/:id").put(updateThought).delete(deleteThought);
module.exports = router;
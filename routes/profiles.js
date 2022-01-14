const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.profiles.idx);
router.get("/:id", ctrl.profiles.show);

module.exports = router;
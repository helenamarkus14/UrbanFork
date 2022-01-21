const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.profiles.idx);
router.get("/about", ctrl.profiles.about);
router.get("/:id", ctrl.profiles.show);
router.get("/:id/austin", ctrl.profiles.austin);
router.get("/:id/boston", ctrl.profiles.boston);
router.get("/:id/boulder", ctrl.profiles.boulder);
router.get("/:id/chicago", ctrl.profiles.chicago);
router.get("/:id/nyc", ctrl.profiles.nyc);

module.exports = router;
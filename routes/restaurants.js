const router = require("express").Router();
const ctrl = require("../controllers");



router.get("/:id", ctrl.restaurants.show);
router.post("/profiles/:id/restaurants", ctrl.restaurants.create);



module.exports = router;
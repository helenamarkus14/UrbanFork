const router = require("express").Router();
const ctrl = require("../controllers");



router.get("/:id", ctrl.restaurants.show);


module.exports = router;
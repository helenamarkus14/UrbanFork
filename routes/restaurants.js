const router = require("express").Router();
const ctrl = require("../controllers");



router.get("/:id", ctrl.restaurants.show);
router.get("/profiles/:id/restaurants/new", ctrl.restaurants.newRestaurant);
router.post("/profiles/:id/restaurants", ctrl.restaurants.create);



module.exports = router;
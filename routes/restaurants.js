const router = require("express").Router();
const ctrl = require("../controllers");




router.get("/profiles/:id/restaurants/new", ctrl.restaurants.newRestaurant);
router.get("/profiles/:id/restaurants/:id", ctrl.restaurants.show);
router.post("/profiles/:id/restaurants", ctrl.restaurants.create);

router.delete("/restaurants/:id", ctrl.restaurants.destroy);

module.exports = router;
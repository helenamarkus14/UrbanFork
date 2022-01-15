const router = require("express").Router();
const ctrl = require("../controllers");




router.get("/profiles/:id/restaurants/new", ctrl.restaurants.newRestaurant);
router.get("/profiles/:id/restaurants/:id", ctrl.restaurants.show);
router.post("/profiles/:id/restaurants", ctrl.restaurants.create);
router.get("/restaurants/:id/edit", ctrl.restaurants.edit)



module.exports = router;
const router = require("express").Router();
const ctrl = require("../controllers");


router.get("/profiles/:id/restaurants/new", ctrl.restaurants.newRestaurant);
router.get("/profiles/:id/restaurants/:id", ctrl.restaurants.show);
router.get("/profiles/:id/restaurants/:id/edit", ctrl.restaurants.edit);
router.post("/profiles/:id/restaurants", ctrl.restaurants.create);
router.put("/restaurants/:id", ctrl.restaurants.update);
router.delete("/restaurants/:id", ctrl.restaurants.destroy);
// router.get("/profiles/:id/restaurants/:id/edit", ctrl.restaurants.edit);

module.exports = router;
const router = require("express").Router();
const passport = require("passport");

router.get("/profiles", function (req, res) {
  res.render("/profiles", {
    user: req.user,
  });
});

// log in
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

// callback
  router.get(
    "/oauth2callback",
    passport.authenticate("google", {
      successRedirect: "/profiles",
      failureRedirect: "/",
    })
  );

  // log out
  router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  module.exports = router;
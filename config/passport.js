const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const Profile = require("../models/Profile")

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
      },
      function (accessToken, refreshToken, profile, cb) {
        Profile.findOne({ googleId: profile.id }, function (err, profile) {
          if (err) return cb(err);
          if (profile) {
            return cb(null, profile);
          } else {
            const newProfile = new Profile({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
            });
            newProfile.save(function (err) {
              if (err) return cb(err);
              return cb(null, newProfile);
            });
          }
        });
      }
    )
  );

  passport.serializeUser(function (profile, done) {
    done(null, profile.id);
  });

  passport.deserializeUser(function (id, done) {
    Profile.findById(id, function (err, profile) {
      done(err, profile);
    });
  });
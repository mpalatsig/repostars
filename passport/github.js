const passport       = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const path = require('path');
const debug = require('debug')(`repostars:${path.basename(__filename).split('.')[0]}`);


passport.serializeUser(function(user, cb) { cb(null, user); });
passport.deserializeUser(function(obj, cb) { cb(null, obj);  });

passport.use(new GitHubStrategy({
    clientID:     process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // save the user if it doesn't exist
    debug("we have the profile");
    console.log(profile);
  }
));

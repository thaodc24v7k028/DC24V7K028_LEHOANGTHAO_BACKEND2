const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "911668469299-glh5delfbfdr7fug0ns43hig6rp62jgm.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // profile chứa info user Google
      const user = {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      };

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;
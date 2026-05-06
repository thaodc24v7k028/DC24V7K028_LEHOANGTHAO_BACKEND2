const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

// login Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("http://localhost:3001"); // frontend
  }
);

// lấy user
router.get("/user", (req, res) => {
  res.send(req.user || null);
});

// logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.send({ message: "Logged out" });
  });
});

module.exports = router;
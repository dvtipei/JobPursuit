const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }

  res.render("login");
});

router.get("/home", async (req, res) => res.render("homepage"));

router.get("/search", async (req, res) =>
  res.render("job_search", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
  })
);

router.get("/home", async (req, res) =>
  res.render("homepage", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
  })
);

module.exports = router;

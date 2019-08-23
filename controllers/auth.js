const router = require("express").Router();
const db = require("../models");
const passport = require("../config/ppConfig");

router.get("/github", passport.authenticate("github"));

router.get("/github/callback", 
	passport.authenticate("github", { failureRedirect: "/auth/github"}),
	(req, res) => {
		console.log("Hey");
		res.redirect("/");
	})

module.exports = router;
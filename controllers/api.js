const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../models");

router.get("/repos", (req, res) => {
	console.log("req.user:", req.user);
	var config = {
		headers: {
			"Authorization": `Bearer ${req.user.accessToken}`,
			"User-Agent": "khilse-oauth-boilerplate"
		}
	}
	axios.get("https://api.github.com/user/repos", config)
	.then(response => {
		res.render("repos", { repos: response.data });
	})
	.catch(err => {
		console.log(err);
	})
})

module.exports = router;
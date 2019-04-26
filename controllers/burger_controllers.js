//import: express burger.js
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create the `router` for the app, and export the `router` at the end of your file

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        //console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/burger/eat", function(req, res) {
    burger.updateOne(req.body.id, function() {
        res.redirect("/");
    });
});
router.post("/burger/restore", function(req, res) {
    burger.restoreOne(req.body.id, function() {
        res.redirect("/");
    });
});

router.post("/burger/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    });
});

module.exports = router;
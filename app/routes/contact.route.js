const express = require("express");

const contacts = require("../controllers/contact.controller");

const router = express.Router();
const isAuth = require("../middleware/auth.middleware");

router.route("/")
        .get(contacts.findAll)
        .post(isAuth, contacts.create)
        .delete(isAuth, contacts.deleteAll)

router.route("/favorite")
        .get(contacts.findAllFavorite)

router.route("/:id")
        .get(contacts.findOne)
        .put(isAuth, contacts.update)
        .delete(isAuth, contacts.delete)

module.exports = router;


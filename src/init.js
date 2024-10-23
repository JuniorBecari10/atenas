const express = require("express");
const cors = require("cors");
const path = require("path");

const util = require("./util");
const data = require("./data");

function init(app) {
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "..", "views"));
    app.use(express.static(path.join(__dirname, "..", "public")));

    app.use(util.logMiddleware);
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(express.json());

    data.readDatabase();
}

module.exports = init;

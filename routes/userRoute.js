const routes = require('express').Router();
const userController = require("../controllers/userController");


routes.get("/users",userController.getUser);


module.exports = routes;
const routes = require('express').Router();
const userController = require("../controllers/userController");


routes.get("/users",userController.getUser);
routes.post("/user",userController.addUser);
routes.delete("/user/:id",userController.deleteUser);
routes.get("/getuserbygender",userController.getUserByGender);


module.exports = routes;
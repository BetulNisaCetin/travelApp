const router = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/jwt_token");

router.get("/", verifyToken, userController.getUser); 

router.delete("/", verifyToken, userController.deleteUser);

module.exports = router;

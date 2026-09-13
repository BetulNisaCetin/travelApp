const router = require("express").Router();
const countryController = require("../controllers/countryControllers"); 
const verifyToken = require("../middleware/jwt_token");


router.post("/", verifyToken, countryController.addCountry);


router.get("/", verifyToken, countryController.getCountries);


router.get("/:id", verifyToken, countryController.getCountry);


router.post("/:id/places", verifyToken, countryController.addPlacesToCountry);

module.exports = router;

const express = require('express');
const router = express.Router();

const foodController = require("../controllers/food")

router.get('/',foodController.getAllFoods)

router.get('/:foodId', foodController.getOneFood)

module.exports = router;
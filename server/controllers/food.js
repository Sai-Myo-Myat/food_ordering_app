const FoodModel = require('../models/food')
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

exports.getAllFoods = (req,res,next) => {
    FoodModel
        .find()
        .then(foods => {
            res.status(200).json({
                message: "fetching all foods success",
                foods: foods,
            })
        })
        .catch(error => res.status(500).send("fetching failed"))
}

exports.getOneFood = (req,res,next) => {
    const foodId = req.params.foodId;
    if(ObjectId.isValid(foodId)){
        FoodModel.findOne({_id: foodId})
        .then(food => {
            console.log(food, "food")
            if(!food){
                res.status(404).json({
                    errorMessage: "couldn't find with this id "
                })
            }
            res.status(200).json({
                message: "fetched food successfully",
                food: food
            })
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).send("server error")
        })
    }else {
        res.status(400).send("id is not valid")
    }
}
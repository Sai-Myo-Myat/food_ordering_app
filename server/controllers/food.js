exports.getAllFoods = (req,res,next) => {
    res.status(200).send({
        title: "chicken",
        price: "2000ks"
    })
}

exports.getOneFood = (req,res,next) => {
    console.log("id", req.params.foodId)
    res.status(200).send({
        title: "chicken",
        price: "2000ks",
        id: req.params.foodId
    })
}
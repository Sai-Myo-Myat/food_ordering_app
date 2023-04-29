exports.getAllFoods = (req,res,next) => {
    res.status(200).send({
        title: "chicken",
        price: "2000ks"
    })
}
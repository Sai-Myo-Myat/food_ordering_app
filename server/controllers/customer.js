const CustomerModel = require('../models/customer');


exports.getAllCustomer = (req,res,next) => {
    CustomerModel
        .find()
        .then(customers => {
            res.status(200).json({
                message: "success",
                customers: customers
            })
        })
}
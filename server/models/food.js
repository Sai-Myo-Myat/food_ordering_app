const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
},
{timestamps: true})

module.exports = mongoose.model("Foods", foodSchema);
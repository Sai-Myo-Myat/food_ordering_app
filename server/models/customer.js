const mongoose = require('mongoose');
const { ensureIndexes } = require('./food');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    cart: {
        foods: [
            {
                foodId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Foods',
                    required: true
                },
                quantity: {type: Number, required: true}
            }
        ]
    }
})

module.exports = mongoose.model("Customers", customerSchema);
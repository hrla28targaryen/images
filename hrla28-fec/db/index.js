const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/products')

const dressSchema = mongoose.Schema({
    product_id: Number,
    image: [String],
    purchaseInfo: {
        sizeWorn: String,
        rentFor: String,
        overAllFit: String
    },
    userInfo: {
        usuallyWear: String,
        height: String,
        age: String,
        bustSize: String,
        BodyType: String,
        weight: String
    },
    comment: {
        rating: Number,
        commentTitle: String,
        commentBody: String
    }
})

const Dresses = mongoose.model('Dresses', dressSchema);

module.exports = Dresses
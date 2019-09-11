const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);
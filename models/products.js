var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PRODUCT_SCHEMA = new Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

module.exports = mongoose.model('product', PRODUCT_SCHEMA);
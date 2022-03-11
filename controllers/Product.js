const PRODUCT = require('../models/products');

var getAllProducts = async (req,res) => {
    let products = await PRODUCT.find({}).exec();

    if (products.length > 0) {
        return res.status(200).json({
            status: true,
            message: "Data successfully get.",
            data: products
        });
    }
    else {
        return res.status(200).json({
            status: true,
            message: "No products available for sale.",
            data: products
        });
    }
}

module.exports = {
    getAllProducts
}
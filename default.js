var Products = require('./constants/products');
var productSchema = require('./models/products');

var defaultData = async () => {
    await productSchema.deleteMany({});
    return await productSchema.insertMany(
        Products,
        (err, writeResult) => {
            if (!err) {
                console.log("Data insert successful!");
            }
            else {
                console.log("Failed to insert data due to ", err.message);
            }
        }
    );
}

module.exports = defaultData;
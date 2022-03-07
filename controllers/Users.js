const USER = require('../models/user');

var register = async (req,res) => {
    const NEW_USER = new USER(req.body);

    return NEW_USER.save()
        .then(docs => {
            console.log("New user data ", docs);
            res.status(200).json({
                status: true,
                message: "Data saved successfully.",
                data: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                status: false,
                message: "Username and email must be unique. Server error.",
                error: err.message
            });
        });
}

module.exports = {
    register
}
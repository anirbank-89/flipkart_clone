const USER = require('../models/user');

var register = async (req, res) => {
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

var login = async (req, res) => {
    let user = await USER.findOne({ username: req.body.username }).exec();

    if (user != null && user.password == req.body.password) {
        return res.status(200).json({
            status: true,
            message: "Login successfull.",
            data: user
        });
    }
    else if (user != null && user.password != req.body.password) {
        return res.status(401).json({
            status: false,
            error: "Password is incorrect.",
            data: null
        });
    }
    else {
        return res.status(401).json({
            status: false,
            error: "Wrong email or password.",
            data: null
        });
    }


}

module.exports = {
    register,
    login
}
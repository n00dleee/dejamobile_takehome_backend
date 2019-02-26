var express = require('express');
var router = express.Router();
var loginManagement = require('./login_management');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const config = require('./../../config')


router.post('/', function (req, res) {
    console.log("HELLOOOOOOOOOOOO");
    var content = req.body;

    console.log("A user is trying to log in");

    loginManagement.checkUserCredentials(content).then((result) => {
        console.log("Login successfull !");
        let token = jwt.sign({ username: result.username }, config.secret, { expiresIn: "240" }); // Sigining the token, expires in 4 min
        console.log("Token generated ! ");
        res.status(200).json({
            sucess: true,
            err: null,
            token
        });

    }).catch((err) => {
        res.status(401).json({
            sucess: false,
            token: null,
            err: "Username or password is incorrect"
        });
    });
});

router.get('/', function (req, res) {
    res.status(200);
    res.send("LOGIN URL");
});

module.exports = router;
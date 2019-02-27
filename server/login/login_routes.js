var express = require('express');
var router = express.Router();
var loginManagement = require('./login_management');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const config = require('./../../config')


router.post('/', function (req, res) {
    var content = req.body;
    console.log("A user is trying to log in");
    loginManagement.checkUserCredentials(content).then((result) => {
        console.log("Login successfull !");

        //jwt libs seems to have problems :
        //1 hours shift between system time and token time
        //expiresIn: "3600" should provide a 1 hour lifespan for the token. It does not... If using a unit specifier, like "1h" it works
        let token = jwt.sign({ username: result.username }, config.secret, { expiresIn: "2h" });
        console.log("Token generated !");
        res.status(200).json({
            success: true,
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
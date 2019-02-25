var express = require('express');
var router = express.Router();
var loginManagement = require('./login_management');

router.post('/', function (req, res) {
    console.log("HELLOOOOOOOOOOOO");
    var content = req.body;

    console.log("A user is trying to log in");

    loginManagement.checkUserCredentials(content).then((body, err) => {
        console.log("Login successfull !");
        res.status(200);
        res.send("Authorized user")
    }).catch((err) => {
        console.log("Erro while trying to log in");
        res.status(401);
        res.send("Unauthorized user")
    });
});

router.get('/', function (req, res) {
    res.status(200);
    res.send("LOGIN URL");
});

module.exports = router;
var express = require('express');
var router = express.Router();
var userManagement = require('./users_management')

router.get('/', function (req, res) {
    res.status(503);
    res.send("Not implemented yet : GET USER LIST");
})

router.post('/', function (req, res) {
    var content = req.body;

    userManagement.checkUserCreationRequest(content);

    userManagement.createUser(content).then((result) => {
        res.status(201);
        res.send("User successfully created");
        console.log("User created : ");
        console.log(content);
    }).catch((err) => {
        console.log('Error while creating user : ' + err.body)
    })
})

router.get('/:userId', function (req, res) {
    var userId = req.params.userId;
    res.status(503);
    res.send("Not implemented yet : GET USER for user id " + userId);
})

module.exports = router;
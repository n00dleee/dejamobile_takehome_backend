var express = require('express');
var router = express.Router();
var digitizedCardsManagement = require('./digitizedCards_management')

router.get('/', function (req, res) {
    res.status(503);
    res.send("Not implemented yet : GET DIGITIZED CARDS LIST");
})

router.post('/', function (req, res) {
    var content = req.body;
    digitizedCardsManagement.createDigitizedCard(content).then((result) => {
        res.status(201);
        res.send("Digitized card successfully created");
    }).catch((err) => {
        res.status(412);
        res.send("Error while creating digitized card");
        console.log('Error while creating digitized card : ' + err.body)
    })
})

router.get('/:digitizedCardId', function (req, res) {
    var digitizedCardId = req.params.digitizedCardId;
    res.status(503);
    res.send("Not implemented yet : GET DIGITIZED CARD for id " + digitizedCardId);
})

module.exports = router;
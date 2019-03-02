var express = require('express');
var router = express.Router();
var digitizedCardsManagement = require('./digitizedCards_management')

router.get('/', function (req, res) {
    res.status(503);
    res.send("Not implemented yet : GET on DIGITIZED CARDS URL");
})

router.post('/', function (req, res) {
    var content = req.body;
    console.log("About to create a new digitized card...");
    digitizedCardsManagement.createDigitizedCard(content).then((result) => {
        console.log("Digitized card successfully provided by corresponding card issuing company")
        console.log("Sending back digitized card to API's caller")
        res.status(201);
        res.send(result);
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
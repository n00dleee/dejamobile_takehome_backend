var Card = mongoose.model("Card");
var DetailedCardNumber = require('./../../models/card_model')
var DigitizedCardNumber = require( './../../models/digitizedCard_model');
var VisaMockup = require('./')
module.exports = {
    getDigitizedCard: function (c) {
        return new Promise(function (resolve, reject) {
            var card = new Card(card);
            var detailedCardInfo = generateDigitizedCardFromActualCard(card);
            DigitizedCardNumber.cardNumber = detailedCardInfo.getFullCardNumber();
            DigitizedCardNumber.ownerName = card.ownerName;
            DigitizedCardNumber.expirationDate = card.expirationDate;
            DigitizedCardNumber.crypto = getRandomDigit() + getRandomDigit() + getRandomDigit();
            return DigitizedCardNumber;
        });
    },
}

function generateDigitizedCardFromActualCard (card){
    console.log('1');
    DetailedCardNumber.parseCardNumber(card.cardNumber);
    console.log('2');
    console.log("Details card info");
    console.log(DetailedCardNumber);

    //replace account number & crypto with random digits
    var temp ="";
    do {
    temp += getRandomDigit();
    } while (temp.length < 10);
    DetailedCardNumber.accountNumber = temp;
    return DetailedCardNumber;
}

function getRandomDigit(){
    return Math.floor(Math.random() * Math.Floor(9)).toString();
}
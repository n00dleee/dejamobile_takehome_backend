var DetailedCardNumber = require('./../../models/card_model')
var DigitizedCard = require('./../../models/digitizedCard_model')

module.exports = {
    getDigitizedCard: function (card) {
        console.log("VISA : processing card info in order to generate a digitized card...")
        return new Promise(function (resolve, reject) {
            console.log("VISA : processing...")
            var detailedCardInfo = generateDigitizedCardFromActualCard(card);
            console.log("VISA : generated digitized card info");
            console.log(detailedCardInfo);
            console.log("VISA : processing... ...")
            var cardNumber = detailedCardInfo.getFullCardNumber();
            console.log("VISA : processing... ... ...")
            var ownerName = card.ownerName;
            console.log("VISA : processing... ... ... ...")
            var expirationDate = card.expirationDate;
            console.log("VISA : processing... ... ... ... ...")
            var crypto = getRandomDigit() + getRandomDigit() + getRandomDigit();

            DigitizedCard.buildDigitizedCard(ownerName, cardNumber, expirationDate, crypto);
            console.log("VISA : digitized card generated :");
            console.log(DigitizedCard);
            resolve(DigitizedCard);
        });
    },
}

function generateDigitizedCardFromActualCard(card) {
    DetailedCardNumber.parseCardNumber(card.cardNumber);
    console.log("VISA : Detailed card info parsed");
    console.log(DetailedCardNumber);

    //replace account number & crypto with random digits
    var temp = "";
    do {
        temp += getRandomDigit();
    } while (temp.length < 10);
    DetailedCardNumber.accountNumber = temp;
    console.log("VISA : account number generated : " + DetailedCardNumber.accountNumber);
    return DetailedCardNumber;
}

function getRandomDigit() {
    return Math.floor(Math.random() * Math.floor(9)).toString();
}
var DetailedCardNumber = require('./../../models/card_model')
var DigitizedCard = require('./../../models/digitizedCard_model')
var Luhn = require('luhn-js');

module.exports = {
    getDigitizedCard: function (card) {
        console.log("VISA : processing card info in order to generate a digitized card...")
        return new Promise(function (resolve, reject) {
            //first let's check the cardnumber is "valid"
            if (!verifyCardNumberHasTheCorrectLenght(card.cardNumber))
                reject("Card number is not correctly formatted");

            if (!verifyCardNumberAgaintLuhnAlgo(card.cardNumber))
                reject("Card number failed the Luhn algorithm verification");

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
    } while (temp.length < 9); //10 digits minus the last one which is a control digit generated from Luhn algorithm
    DetailedCardNumber.accountNumber = temp;

    //add last Luhn control digit
    DetailedCardNumber.checksum = getLuhnControlDigitFromCardNumber(DetailedCardNumber.issuerIdentificationNumber + DetailedCardNumber.cardNumber);

    console.log("VISA : account number generated : " + DetailedCardNumber.accountNumber);
    return DetailedCardNumber;
}

function getRandomDigit() {
    return Math.floor(Math.random() * Math.floor(9)).toString();
}

function verifyCardNumberHasTheCorrectLenght(cardNumber) {
    if (cardNumber.length != 16)
        return false;
    else
        return true;
}

414384143869183957439

function verifyCardNumberAgaintLuhnAlgo(cardNumber) {
    console.log("VISA : verifying card number against Luhn aglorithm...")
    if (Luhn.isValid(cardNumber)) {
        console.log("VISA : card number successfully verified against Luhn algorithm")
        return true;
    }
    else {
        console.log("VISA : ERROR card number verification against Luhn algorithm failed")
        return false;
    }
}

function getLuhnControlDigitFromCardNumber(cardNumberWithoutLastDigit) {
    console.log("VISA : generation of Luhn control digit for current generated card...");
    var controlDigit = Luhn.getRemainder(cardNumberWithoutLastDigit);
    console.log("VISA : control digit has been generated " + controlDigit);
    return controlDigit;

}
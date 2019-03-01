var assert = require('assert');
var request = require('request');


//very basic "tests", just to check server is runnning

describe('Basic request', function () {
    var rsp;
    before((done) => {
        request.get('http://localhost:8080/').on('response', function (response) {
            rsp = response;
            done();
        });
    });

    it('Should get a HTTP 200', function () {
        assert.equal(rsp.statusCode, 200)
    });
});

describe('Unauthorized request', function () {
    var rsp;
    before((done) => {
        request.get('http://localhost:8080/users').on('response', function (response) {
            rsp = response;
            done();
        });
    })

    it('Should get a HTTP 401', function () {
        assert.equal(rsp.statusCode, 401)
    });
});
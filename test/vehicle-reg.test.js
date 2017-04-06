const assert = require('assert');
const isFromBellville = require('../vehicle-reg');

describe('The Bellville registration number check', function(){

    it('should find that this plate is from Bellville', function(){
        assert.equal(true, isFromBellville('CY323886'));
    });
    it('should find that this plate is not from Bellville', function(){
        assert.equal(false, isFromBellville('CA765989'));
    });
});

const assert = require('assert');
const isFromCapeTown = require('../isFromCapeTown');

describe('The Cape Town registration number check', function(){

    it('should find that this plate is from Cape Town', function(){
        assert.equal(true, isFromCapeTown('CA231532'));
    });
    it('should find that this plate is not from Cape Town', function(){
        assert.equal(false, isFromCapeTown('KLJ675L'));
    });
});

const regCheck = require('../regCheck')
const assert = require('assert');

describe('The registration plate and location comparison', function(){

    it('should find that this plate matches the location', function(){
        assert.equal(true, regCheck('KGY343GP', 'GP'));
    });
    it('should find that this plate does not match the location', function(){
        assert.equal(false, regCheck('KLJ675L', 'GP'));
    });
});

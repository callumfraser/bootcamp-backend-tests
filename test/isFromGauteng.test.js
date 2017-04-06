const assert = require('assert');
const isFromGauteng = require('../isFromGauteng');

describe('The Gauteng registration number', function(){

    it('should find that this plate is from Gauteng', function(){
        assert.equal(true, isFromGauteng('KGY343GP'));
    });
    it('should find that this plate is not from Gauteng', function(){
        assert.equal(false, isFromGauteng('KLJ675L'));
    });
});

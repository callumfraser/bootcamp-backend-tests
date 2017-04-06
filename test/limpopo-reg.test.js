const assert = require('assert');
const isFromLimpopo = require('../isFromLimpopo')


describe('The Limpopo registration number check', function(){

    it('should find that this plate is from Limpopo', function(){
        assert.equal(true, isFromLimpopo('WSP212L'));
    });
    it('should find that this plate is not from Limpopo', function(){
        assert.equal(false, isFromLimpopo('FGH212GP'));
    });
});

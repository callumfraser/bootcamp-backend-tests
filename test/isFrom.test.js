const assert = require('assert');
const isFrom = require('../isFrom')


describe('The registration number comparison', function(){

    it('should find that these plates match their locations', function(){
        assert.equal(true, isFrom('CA41432', 'CA'));
    });
    it('should find that these plates do not match their locations', function(){
        assert.equal(false, isFrom('FGH212GP', 'L'));
    });
});

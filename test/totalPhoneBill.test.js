const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('The total phone bill calculator', function(){

    it('should find that this phone bill should cost R12.95', function(){
        assert.equal('R12.95', totalPhoneBill('call, sms, call, call, sms, sms, call'));
    });
    it('should find that this phone bill should cost R6.15', function(){
        assert.equal('R6.15', totalPhoneBill('call, sms, call'));
    });
});

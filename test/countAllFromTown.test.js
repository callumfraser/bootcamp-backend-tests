const assert = require('assert');
const countAllFromTown = require('../countAllFromTown')

describe('The registration number filter count', function(){

    it('should find that this string has 3 number plates from Cape Town', function(){
        assert.equal(3, countAllFromTown('CA231532,CA3252,CY346272,CA2626,CJ246726','CA'));
    });
    it('should find that there are no plates from Stellenbosch in this string', function(){
        assert.equal(0, countAllFromTown('KLJ675L,CA35235,CA32522,CY25235','CL'));
    });
});

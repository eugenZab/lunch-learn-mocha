const expect = require('chai').expect;

describe('Test Suite 1', function(){
    it('Test 1 - Pass', function(){
        expect('test').to.have.lengthOf(4);
    })

    it('Test 2 - Fail', function(){
        expect('testt').to.have.lengthOf(4);
    })
})
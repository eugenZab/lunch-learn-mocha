const expect = require('chai').expect;

const multiplyByFive = function(value, done){
    setTimeout(function(){
        if(value === 10){
            done (value * 4)
        }
        done (value * 5);
    }, 1000)
}


describe('Test Suite 1', function(){
    it('Test 1 - Pass', function(done){
        multiplyByFive(5,function(result){
            expect(result).to.be.equal(25, "5 * 5 results is incorect");
            done();
        })
    })
    it('Test 2 - Fail', function(done){
        multiplyByFive(10,function(result){
            expect(result).to.be.equal(50, "10 * 5 results is incorect");
            done();
        })
    })
})
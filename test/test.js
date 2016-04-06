var chai = require('chai'); // requires the chain bdd library
var expect = chai.expect;   // require the expect chai library
var db = db || {};          // mock database object <------- name spacing

// describe a set of test

describe('How BDD testing should work for newbies', function() {

  // callbacks contain tests
  // CCT - callbacks contain text
  // IT is a test

  it('should have a passing grade in mocha', function() {
    var grade = 8; //8 out of 10 to pass
    expect(grade).to.be.above(7);
  });

});

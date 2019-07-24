import isValid from '../20.valid-parenthess';
var assert = require('assert');

var input1 = '()';
var expected1 = true;
var input2 = '[';
var expected2 = false;

describe('Stack', function() {
  it('valid-parenthess', function() {
    var ret = isValid(input1);
    assert.equal(ret, expected1);
  });
  it('valid-parenthess 2', function() {
    var ret = isValid(input2);
    assert.equal(ret, expected2);
  });
});

// import { equal } from 'assert';
var assert = require('assert');
// import twoSum  from '../1.two-sum';
// import { equal } from 'assert';

//CommonJS
// var sum = require('../1.two-sum');
// var twoSum = sum.twoSum;

//ES6
import twoSum from '../1.two-sum';

describe('Array two-sum', function() {
  it('twoSum', function() {
    var res = twoSum([2, 7, 11, 15], 9);
    assert.equal(res.indexOf(0), 0);
    assert.equal(res.indexOf(1), 1);
  });
});

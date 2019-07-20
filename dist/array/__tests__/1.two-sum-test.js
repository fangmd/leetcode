"use strict";

var _ = _interopRequireDefault(require("../1.two-sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { equal } from 'assert';
var assert = require('assert'); // import twoSum  from '../1.two-sum';
// import { equal } from 'assert';
//CommonJS
// var sum = require('../1.two-sum');
// var twoSum = sum.twoSum;
//ES6


describe('Array two-sum', function () {
  it('twoSum', function () {
    var res = (0, _["default"])([2, 7, 11, 15], 9);
    assert.equal(res.indexOf(0), 0);
    assert.equal(res.indexOf(1), 1);
  });
});
//# sourceMappingURL=1.two-sum-test.js.map
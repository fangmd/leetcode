var assert = require('assert');
import climbStairs from '../70.climbing-stairs';

describe('Other', function() {
  it('climbStairs', function() {
    var res = climbStairs(2);
    assert.equal(res, 2);

    var res2 = climbStairs(3);
    assert.equal(res2, 3);
  });

});

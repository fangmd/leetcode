var assert = require('assert');
import longestCommonPrefix from '../14.longest-common-prefix';

describe('Other', function() {
  it('longestCommonPrefix', function() {
    var strs = ["flower","flow","flight"];
    var res = longestCommonPrefix(strs);
    assert.equal(res, 'fl');

    var strs = ["c","c"];
    var res = longestCommonPrefix(strs);
    assert.equal(res, 'c');
  });

});

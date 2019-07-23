import { ListNode } from '../../common';
import deleteDuplicates from '../83.remove-duplicates-from-sorted-list';
var assert = require('assert');

// import { equal } from 'assert';
var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);

var l2 = null;

describe('LinkList deleteDuplicates', function() {
  it('one', function() {
    var ret = deleteDuplicates(l1);
    assert.equal(ret.val, 1);
    assert.equal(ret.next.val, 2);
  });

  it('two', function() {
    var ret = deleteDuplicates(l2);
    assert.equal(ret, null);
  });
});

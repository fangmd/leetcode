import { ListNode } from '../../common';
import mergeTwoLists from '../21.merge-two-sorted-lists';
import { link } from 'fs';


// import { equal } from 'assert';
var assert = require('assert');


// import { equal } from 'assert';
var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

var l3 = new ListNode(-6);
l3.next = new ListNode(-5);
l3.next.next = new ListNode(6);
l3.next.next.next = new ListNode(6);
l3.next.next.next.next = new ListNode(7);
var l4 = new ListNode(0);

describe('LinkList mergeTwoLists', function() {
  it('one', function() {
    var ret = mergeTwoLists(l1, l2);
    // console.log({ret})
    assert.equal(ret.val, 1);
    assert.equal(ret.next.val, 1);
    assert.equal(ret.next.next.val, 2);
    assert.equal(ret.next.next.next.val, 3);
    assert.equal(ret.next.next.next.next.val, 4);
    assert.equal(ret.next.next.next.next.next.val, 4);
  });

  it('two', function() {
    // [-6,-5,6,6,7]
    // [0]
    // out: [-6,-5,0,6,6,7]
    var ret = mergeTwoLists(l3, l4);
    assert.equal(ret.val, -6);
    assert.equal(ret.next.val, -5);
    assert.equal(ret.next.next.val, 0);
    assert.equal(ret.next.next.next.val, 6);
    assert.equal(ret.next.next.next.next.val, 6);
    assert.equal(ret.next.next.next.next.next.val, 7);
  });
});


var assert = require("assert")

import { findKthLargest } from "../215.kth-largest-element"

describe("215.kth-largest-element", function () {
  it("215.kth-largest-element", function () {
    const out = findKthLargest([3, 2, 1, 5, 6, 4], 2)
    assert.equal(out, 5)
  })
})

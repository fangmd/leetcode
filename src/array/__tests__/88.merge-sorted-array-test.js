var assert = require("assert")

import merge from "../88.2merge-sorted-array"

describe("Array merge-sorted-array", function () {
  it("merge", function () {
    var res = merge([2, 7, 11, 15], [1])
    console.log(res);
    // [1, 2, 7, 11, 15]
    assert.equal(res[0], 1)
    assert.equal(res[1], 2)
    assert.equal(res[2], 7)
    assert.equal(res[3], 11)
    assert.equal(res[4], 15)
  })
})

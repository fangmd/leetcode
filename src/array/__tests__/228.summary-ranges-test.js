var assert = require("assert")

import { summaryRanges } from "../228.summary-ranges"

describe("228.summary-ranges", function () {
  it("228.summary-ranges", function () {
    const ret = summaryRanges([0, 1, 2, 4, 5, 7]) // ["0->2","4->5","7"]
    assert.equal(ret.length, 3)
    assert.equal(ret[0], "0->2")
    assert.equal(ret[1], "4->5")
    assert.equal(ret[2], "7")

    const ret2 = summaryRanges([0, 2, 3, 4, 6, 8, 9]) // ["0","2->4","6","8->9"]
    assert.equal(ret2.length, 4)
    assert.equal(ret2[0], "0")
    assert.equal(ret2[1], "2->4")
    assert.equal(ret2[2], "6")
    assert.equal(ret2[3], "8->9")

    const ret3 = summaryRanges([]) // []
    assert.equal(ret3.length, 0)
  })
})

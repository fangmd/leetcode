var assert = require("assert")

import { combinationSum } from "../*39.combination-sum"

describe("39.combination-sum", function () {
  it("39.combination-sum", function () {
    const ret1 = combinationSum([2, 3, 6, 7], 7)
    // console.log("ret1", ret1)
    assert.equal(ret1[0][0], 2)
    assert.equal(ret1[0][1], 2)
    assert.equal(ret1[0][2], 3)
    assert.equal(ret1[1][0], 7)
  })
})

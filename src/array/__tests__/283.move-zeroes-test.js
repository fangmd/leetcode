var assert = require("assert")

import { moveZeroes } from "../283.move-zeroes"

describe("283.move-zeroes", function () {
  it("283.move-zeroes", function () {
    const out = moveZeroes([0, 1, 0, 3, 12])

    assert.equal(out[0], 1)
    assert.equal(out[1], 3)
    assert.equal(out[2], 12)
    assert.equal(out[3], 0)
    assert.equal(out[4], 0)
  })
})

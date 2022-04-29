var assert = require("assert")

import { missingNumber, missingNumber2 } from "../268.mission-number"

describe("268.mission-number", function () {
  it("268.mission-number", function () {
    assert.equal(missingNumber([3, 0, 1]), 2)
    assert.equal(missingNumber([0, 1]), 2)

    assert.equal(missingNumber2([3, 0, 1]), 2)
    assert.equal(missingNumber2([0, 1]), 2)
  })
})

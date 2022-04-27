var assert = require("assert")

import { containsDuplicate } from "../219.contains-duplicate"

describe("219.contains-duplicate", function () {
  it("219.contains-duplicate", function () {
    assert.equal(containsDuplicate([1, 2, 3, 1], 3), true)
    assert.equal(containsDuplicate([1, 0, 1, 1], 1), true)
    assert.equal(containsDuplicate([1, 2, 3, 1, 2, 3], 2), false)
  })
})

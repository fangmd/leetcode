var assert = require("assert")

import { containsDuplicate } from "../217.contains-duplicate"

describe("217.contains-duplicate", function () {
  it("contains-duplicate", function () {
    assert.equal(containsDuplicate([1, 2, 3, 1]), true)
    assert.equal(containsDuplicate([1, 2, 3, 4]), false)
    assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
  })
})

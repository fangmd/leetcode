var assert = require("assert")

import removeElement from "../27.remove-element"

describe("Array remove-element", function () {
  it("removeElement", function () {
    var res = removeElement([2, 7, 11, 15], 7)
    assert.equal(res, 3)
  })
})

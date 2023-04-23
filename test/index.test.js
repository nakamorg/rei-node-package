const rei = require('../src/index');

describe("rei package", () => {
  it("return: You have succesfull installed and ran nakamorg's rei package", () => {
    expect(rei()).toEqual("You have succesfull installed and ran nakamorg's rei package")
  })
})

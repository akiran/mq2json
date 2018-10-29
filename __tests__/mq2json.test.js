let mq2json = require("../index");

describe("tests", () => {
  it("should parse media type ", () => {
    expect(mq2json("screen")).toEqual({ screen: true });
    expect(mq2json("handheld")).toEqual({ handheld: true });
  });
  it("should parse media type with not", () => {
    expect(mq2json("not screen")).toEqual({ screen: false });
    expect(mq2json("not handheld")).toEqual({ handheld: false });
  });

  it("should parse media features", () => {
    expect(mq2json("min-width: 100px")).toEqual({
      minWidth: "100px"
    });
    expect(mq2json("(min-width: 100px) and (max-width: 200px)")).toEqual({
      minWidth: "100px",
      maxWidth: "200px"
    });
  });
});

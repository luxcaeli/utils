import { betweenMinMax } from "./betweenMinMax";

describe("betweenMinMax", () => {
  test("max: 5, min: 1, value: 3 -> 3", () => {
    expect(betweenMinMax({ max: 5, min: 1, value: 3 })).toEqual(3);
  });

  test("max: 5, min: 1, value: 7 -> 5", () => {
    expect(betweenMinMax({ max: 5, min: 1, value: 7 })).toEqual(5);
  });

  test("max: 5, min: 1, value: 0 -> 1", () => {
    expect(betweenMinMax({ max: 5, min: 1, value: 0 })).toEqual(1);
  });

  test("invalid min, max number", () => {
    expect(() => betweenMinMax({ max: 1, min: 5, value: 3 })).toThrow();

    expect(() =>
      betweenMinMax({
        max: Number("one"),
        min: Number("two"),
        value: Number("three"),
      })
    ).toThrow();
  });
});

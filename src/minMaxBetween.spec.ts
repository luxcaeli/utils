import { minMaxBetween } from "./minMaxBetween";

describe("minMaxBetween", () => {
  test("value: 3, min: 1, max: 5 -> 3", () => {
    expect(minMaxBetween(3, 1, 5)).toEqual(3);
  });

  test("value: 7, min: 1, max: 5 -> 5", () => {
    expect(minMaxBetween(7, 1, 5)).toEqual(5);
  });

  test("value: 0, min: 1, max: 5", () => {
    expect(minMaxBetween(0, 1, 5)).toEqual(1);
  });

  test("invalid min, max number", () => {
    expect(() => minMaxBetween(3, 5, 1)).toThrow();

    expect(() =>
      minMaxBetween(Number("one"), Number("two"), Number("three"))
    ).toThrow();
  });
});

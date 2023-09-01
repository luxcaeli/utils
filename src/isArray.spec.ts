import { isArray } from "./isArray";

describe("isArray", () => {
  test("classified as an array object", () => {
    expect(isArray([])).toBeTruthy();

    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  test("classified as an non array object", () => {
    expect(isArray("123")).toBeFalsy();

    expect(isArray(false)).toBeFalsy();

    expect(isArray({})).toBeFalsy();

    expect(isArray(() => {})).toBeFalsy();
  });
});

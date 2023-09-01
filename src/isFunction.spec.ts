import { isFunction } from "./isFunction";

describe("isFunction", () => {
  test("classified as function object", () => {
    expect(isFunction(class Any {})).toBeTruthy();

    expect(isFunction(() => {})).toBeTruthy();

    expect(isFunction(async () => {})).toBeTruthy();

    expect(isFunction(Array.isArray)).toBeTruthy();
  });

  test("classified as non function object", () => {
    expect(isFunction(1)).toBeFalsy();

    expect(isFunction("1")).toBeFalsy();

    expect(isFunction(false)).toBeFalsy();

    expect(isFunction(undefined)).toBeFalsy();

    expect(isFunction(null)).toBeFalsy();

    expect(isFunction({})).toBeFalsy();
  });
});

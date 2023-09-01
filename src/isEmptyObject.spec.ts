import { isEmptyObject } from "./isEmptyObject";

describe("isEmptyObject", () => {
  test("value is classified as empty object", () => {
    expect(isEmptyObject({})).toBeTruthy();
  });

  test("value is classified as non empty object", () => {
    expect(isEmptyObject(null)).toBeFalsy();

    expect(isEmptyObject(undefined)).toBeFalsy();

    expect(isEmptyObject({ foo: "foo" })).toBeFalsy();

    expect(isEmptyObject([])).toBeFalsy();

    expect(isEmptyObject(new Date())).toBeFalsy();

    expect(isEmptyObject(new Map())).toBeFalsy();

    expect(isEmptyObject(new Set())).toBeFalsy();
  });
});

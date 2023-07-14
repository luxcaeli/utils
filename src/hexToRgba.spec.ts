import { hexToRgba } from "./hexToRgba";

describe("hexToRgba", () => {
  test("#ffffff -> rgba(255, 255, 255, 1)", () => {
    expect(hexToRgba("#ffffff")).toEqual("rgba(255, 255, 255, 1)");
  });

  test("(#5eba7d, 0.5) -> rgba(94, 186, 125, 0.5)", () => {
    expect(hexToRgba("#5eba7d", 0.5)).toEqual("rgba(94, 186, 125, 0.5)");
  });

  test("invalid hex code", () => {
    expect(() => hexToRgba("#ff")).toThrow();
    expect(() => hexToRgba("#ff00zz")).toThrow();
  });

  test("invalid opacity", () => {
    expect(() => hexToRgba("#ffffff", -20)).toThrow();
    expect(() => hexToRgba("#ffffff", 2)).toThrow();
  });
});

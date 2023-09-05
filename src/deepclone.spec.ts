import { deepClone } from "./deepClone";

describe("deepClone", () => {
  test("object is deeply cloned", () => {
    const originManky = { manky: { banana: 1 } };
    const shallowCopiedManky = { ...originManky };
    const deepCopiedManky = deepClone(originManky);

    expect(shallowCopiedManky.manky).toBe(originManky.manky);
    expect(deepCopiedManky.manky).not.toBe(originManky.manky);
  });

  test("array object is deeply cloned", () => {
    const mankyList = [{ manky: { banana: 1 } }];
    const shallowCopiedMankyList = [...mankyList];
    const deepCopiedMankyList = deepClone(mankyList);

    expect(mankyList[0]).toBe(shallowCopiedMankyList[0]);
    expect(mankyList[0]).not.toBe(deepCopiedMankyList[0]);
  });

  test("primitive type or null value", () => {
    expect(deepClone(null)).toEqual(null);
    expect(deepClone(1)).toEqual(1);
  });
});

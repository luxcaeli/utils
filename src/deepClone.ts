type DeepCloneable = Record<string, any>;

/**
 * Recursively clone field values.
 *
 * @param value
 * The value to recursively clone.
 *
 * @returns Returns the deep cloned value.
 *
 * @example
 * ```typescript
 * const originManky = { manky: { banana: 1 } };
 * const deepCopiedManky = deepClone(originManky);
 * console.log(originManky.manky === deepCopiedManky.manky); // false
 * ```
 */
export const deepClone = <T>(value: T): T => {
  if (typeof value !== "object") {
    return value;
  }

  if (value === null) {
    return null as T;
  }

  const clone = (Array.isArray(value) ? [] : {}) as DeepCloneable;
  const currentValue = value as DeepCloneable;

  Object.keys(currentValue).forEach((key) => {
    clone[key] =
      typeof currentValue[key] === "object"
        ? deepClone(currentValue[key])
        : currentValue[key];
  });

  return clone as T;
};

/**
 * Check whether value is classified as empty object.
 *
 * @param value
 * The value that need to be checked.
 *
 * @example
 * ```typescript
 * if(!isEmptyObject(value)){
 *  deepClone(value); // value is not empty object
 * }
 * ```
 *
 * @returns boolean value that value is empty object or not.
 */
export const isEmptyObject = (value: unknown) => {
  return Boolean(
    typeof value === "object" &&
      value &&
      value.constructor === Object &&
      Object.keys(value).length === 0
  );
};

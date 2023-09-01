/**
 * Check whether value is classified as a function object.
 *
 * @param value
 * The value which needs to be checked.
 *
 * @example
 * ```typescript
 * if(isFunction(onClick)){
 *  onClick(event);
 * }
 * ```
 *
 * @returns boolean value whether type is function object or not.
 */
export const isFunction = (value: unknown) => {
  return typeof value === "function";
};

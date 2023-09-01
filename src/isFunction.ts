/**
 * Check whether value is classified as a function object.
 *
 * @param value
 * Any type of value which need to be checked as function object.
 *
 * @example
 * ```typescript
 * if(isFunction(onClick)){
 *  onClick(event);
 * }
 * ```
 */
export const isFunction = (value: unknown) => {
  return typeof value === "function";
};

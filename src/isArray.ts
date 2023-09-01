/**
 * Check whether value is classified as array object.
 *
 * @param value
 * The value which needs to be checked.
 *
 * @example
 * ```typescript
 * if(isArray(params.type)){
 *  params.type = params.type[0];
 * }
 * ```
 *
 * @returns boolean value whether type is array or not.
 */
export const isArray = (value: unknown) => {
  if (Array.isArray) {
    return Array.isArray(value);
  }

  return value instanceof Array;
};

/**
 * Callback return number between min and max number.
 * @param value - compared number
 * @param max - maximum number
 * @param min - minimum number
 * @example
 * ```typescript
 * const userPoint = minMaxBetween(150, 0, 100); // 150
 * ```
 * @returns number between min and max.
 */
export const minMaxBetween = (value: number, min: number, max: number) => {
  if ([max, min, value].some((num) => Number.isNaN(num))) {
    throw new Error(
      `You should only assign values that are numeric: [max: ${max}, min: ${min}, value: ${value}]`
    );
  }

  if (min > max) {
    throw new Error(
      `Maximum value must always be greater than the minimum value: [max: ${max}, min: ${min}, value: ${value}]`
    );
  }

  return Math.min(Math.max(value, min), max);
};

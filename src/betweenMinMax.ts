interface BetweenMinMaxParameters {
  max: number;
  min: number;
  value: number;
}

/**
 * Callback return number between min and max number.
 * @param param.min - minimum number
 * @param param.max - maximum number
 * @param param.value - compared number
 * @returns number between min and max.
 */
export const betweenMinMax = ({ max, min, value }: BetweenMinMaxParameters) => {
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

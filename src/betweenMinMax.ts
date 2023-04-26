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
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

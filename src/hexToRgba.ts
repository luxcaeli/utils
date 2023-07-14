const checkDecimalIsInvalid = (num: number) => {
  return Number.isNaN(num) || num < 0 || num > 255;
};

const HEX_CODE_LENGTH = 7;

/**
 * Covert hex color to rgba color
 *
 * @param color
 * The string value of hex color
 * @param alpha - The number value of opacity
 * @example
 * ```typescript
 * const rgbaColor = hexToRgba('#000', 0.5);
 * ```
 * @returns Converted rgba color
 */
export const hexToRgba = (hexColor: string, alpha = 1) => {
  const isHexColor = hexColor[0] === "#" && hexColor.length === HEX_CODE_LENGTH;

  if (!isHexColor) {
    throw new Error(`It is not hex color: [${hexColor}]`);
  }

  if (alpha < 0 || alpha > 1) {
    throw new Error(`It is not valid opacity(0~1): [${alpha}]`);
  }

  const hex = hexColor.substring(1);
  const rgb = hex.match(/.{1,2}/g)?.map((replacer) => {
    return parseInt(replacer, 16);
  });

  if (!rgb || rgb.findIndex(checkDecimalIsInvalid) > 0) {
    throw new Error("There is nothing matched rgb color");
  }

  const [r, g, b] = rgb;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

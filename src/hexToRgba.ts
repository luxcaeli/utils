/**
 * Covert hex color to rgba color
 *
 * @param color - The string value of hex color
 * @example
 * `#FFF`, `#FFFFFF`
 * @param alpha - The number vlaue of opacity
 * @example
 * `0.5`
 * @returns Coverted rgba color
 */
export const hexToRgba = (hexColor: string, alpha: number) => {
  const isHexColor = hexColor[0] === "#" || ![4, 7].includes(hexColor.length);

  if (!isHexColor) {
    throw new Error(`It is not hex color. [${hexColor}]`);
  }

  if (alpha < 0 || alpha > 1) {
    throw new Error(`It is not valid opacity. [${alpha}]`);
  }

  try {
    const hex = hexColor.substring(1);
    const rgb = hex.match(/.{1,2}/g)?.map((replacer) => parseInt(replacer, 16));

    if (!rgb) {
      throw new Error("There is nothing matched rgb color.");
    }

    const [r, g, b] = rgb;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch {
    throw new Error(`It is not valid hexColor. [${hexColor}]`);
  }
};

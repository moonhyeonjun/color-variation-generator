/**
 * Function to generate a random color similar to the given hue value
 * @param {Object} params - Parameters object
 * @param {number} params.baseHue - The base hue value (0 ~ 360)
 * @param {number} params.hueVariance - The range of hue variation (0 ~ 360)
 * @param {number} params.gradientIndex - The color index (for gradient effect)
 * @param {number} params.gradientSteps - The total number of colors (for gradient effect)
 * @returns {string} - A random color similar to the base hue (hex value)
 */
const generateColorVariation = ({
  baseHue,
  hueVariance,
  gradientIndex,
  gradientSteps,
}: {
  baseHue: number;
  hueVariance: number;
  gradientIndex: number;
  gradientSteps: number;
}): string => {
  // Adjust the hue value at regular intervals using gradientIndex and gradientSteps
  const hueStep = hueVariance / gradientSteps;
  const adjustedHue = (baseHue + hueStep * gradientIndex + 360) % 360;

  // Use fixed values for saturation and lightness
  const saturation = 70;
  const lightness = 50;

  // Function to convert HSL to RGB
  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    const toHex = (n: number): string =>
      Math.round((n + m) * 255)
        .toString(16)
        .padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return hslToHex(adjustedHue, saturation, lightness);
};

export { generateColorVariation };

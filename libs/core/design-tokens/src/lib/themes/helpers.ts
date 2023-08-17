export const hexToRgba = (colorValue: string, opacity = 1): string => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHexColour: string = colorValue.replace(
    shorthandRegex,
    (m: string, r: string, g: string, b: string): string =>
      r + r + g + g + b + b
  );

  const result: RegExpExecArray | null =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHexColour);
  const rgb: { r: number; g: number; b: number } = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

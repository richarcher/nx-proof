export const borderRadius: { [key: string]: number } = {
  extraLarge: 100,
  medium: 4,
  default: 3,
  small: 2,
};

export const spacing: { [key: string]: number } = {
  extraLarge: 40,
  large: 24,
  medium: 18,
  default: 12,
  small: 6,
  extraSmall: 3,
};

export const fontSize: { [key: string]: number } = {
  extraLarge: 30,
  large: 24,
  medium: 18,
  default: 16,
  small: 14,
  extraSmall: 12,
};

export const fontWeight: { [key: string]: number } = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const fontFamily: { [key: string]: string } = {
  heading: '"proxima-nova", Helvetica, Arial, sans-serif',
  body: '"proxima-nova", Helvetica, Arial, sans-serif',
};

export const lineHeight: { [key: string]: number } = {
  default: 1.2,
};

export const zIndex: { [key: string]: number } = {
  level1: 100,
  level2: 200,
  level3: 300,
  level4: 400,
  level5: 500,
  level6: 600,
  level7: 700,
  level8: 800,
  level9: 900,
  level10: 1000,
};

export const breakpoint: { [key: string]: number } = {
  phone: 640,
  // Need to use 821 because of rails. Change back to tablet: 800 when we remove sass
  tablet: 821,
  desktop: 1128,
};

export const size: { [key: string]: number } = {
  navbar: 50,
};

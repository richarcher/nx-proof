export const shorthandHelper = (
  values: Array<number | string>,
  unit = 'px'
): string => {
  if (!values.length) {
    return '0px';
  }

  const isNumber = (value: number | string): boolean | number =>
    Number(value) === 0 || Number(value);

  return values
    .map((value: number | string) => `${value}${isNumber(value) ? unit : ''}`)
    .join(' ');
};

export const mediaQueryHelper = (
  breakpoint: number,
  direction = 'min-width'
): string => {
  let adjustedBreakpoint: number = breakpoint;
  if (direction === 'max-width') {
    adjustedBreakpoint -= 1;
  }

  return `@media screen and (${direction}: ${adjustedBreakpoint}px)`;
};

export const matchesMediaQuery = (breakpoint: number): boolean =>
  window.matchMedia(`(min-width: ${breakpoint}px)`).matches;

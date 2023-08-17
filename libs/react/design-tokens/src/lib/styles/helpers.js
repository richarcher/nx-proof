export const shorthandHelper = (values, unit = 'px') => {
  if (!values.length) {
    return '0px';
  }
  const isNumber = (value) => Number(value) === 0 || Number(value);
  return values
    .map((value) => `${value}${isNumber(value) ? unit : ''}`)
    .join(' ');
};

export const mediaQueryHelper = (breakpoint, direction = 'min-width') => {
  let adjustedBreakpoint = breakpoint;
  if (direction === 'max-width') adjustedBreakpoint -= 1;

  return `@media screen and (${direction}: ${adjustedBreakpoint}px)`;
};

export const matchesMediaQuery = (breakpoint) =>
  window.matchMedia(`(min-width: ${breakpoint}px)`).matches;

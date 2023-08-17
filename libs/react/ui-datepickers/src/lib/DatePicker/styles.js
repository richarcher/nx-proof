import { css } from '@emotion/css';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  getThemeColors,
  hexToRgba,
  shorthandHelper,
  spacing,
  zIndex,
} from '@offerzen/design-tokens';

const styles = {
  wrapper: css({
    position: 'relative',
    width: 240,
    fontFamily: fontFamily.body,
  }),

  wrapperError: css({
    '&:focus-within > div:last-child': {
      borderColor: colors.mandy,
      boxShadow: `0 0 0 2px ${hexToRgba(colors.mandy, 0.25)}`,
    },
  }),

  label: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 40,
    width: '100%',
    border: `1px solid ${colors.mystic}`,
    borderRadius: borderRadius.default,
    backgroundColor: colors.white,

    '&:focus': {
      outline: 'none',
    },

    '&[readonly]': {
      pointerEvents: 'none',
      cursor: 'default',
      backgroundColor: colors.athensGray,
    },
  }),

  openLabel: css({
    zIndex: zIndex.level6,
  }),

  errorLabel: css({
    borderColor: colors.mandy,

    '&:focus': {
      borderColor: colors.mandy,
      boxShadow: `0 0 0 2px ${hexToRgba(colors.mandy, 0.25)}`,
    },

    '&:focus-within': {
      borderColor: colors.mandy,
      boxShadow: `0 0 0 2px ${hexToRgba(colors.mandy, 0.25)}`,
    },
  }),

  input: css({
    cursor: 'pointer',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    color: colors.jumbo,
    fontFamily: fontFamily.body,
    fontSize: fontSize.default,
    lineHeight: 1.2,
    padding: shorthandHelper([
      spacing.small,
      42,
      spacing.small,
      spacing.default,
    ]),
    appearance: 'none',
    border: 'none',
    borderRadius: borderRadius.default,

    '&::placeholder': {
      color: colors.grayChateau,
      userSelect: 'none',
    },

    '&:focus': {
      outline: 'none',
    },
  }),

  icon: css({
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    padding: shorthandHelper([0, spacing.default]),
    pointerEvents: 'none',
  }),

  overlay: css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.level5,
  }),

  body: css({
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    border: `1px solid ${colors.mystic}`,
    borderRadius: borderRadius.default,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: -1,
    zIndex: zIndex.level6,
    userSelect: 'none',
    fontSize: fontSize.default,

    '&:focus': {
      outline: 'none',
    },
  }),

  calendarHeader: css({
    display: 'flex',
    alignItems: 'center',
    color: colors.oxfordBlue,
    padding: spacing.default,

    '& strong': {
      flex: 1,
      textAlign: 'center',
    },
  }),

  calendarNavigation: css({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: '50%',

    '&:hover': {
      backgroundColor: colors.geyser,
    },
  }),

  calendar: css({
    // Since calendar adds 6 on top and bottom, and header and footer add 12,
    // we need to reduce 6 from the calendar's top and bottom to have a combined of 12 on both sides
    marginTop: -spacing.small,
    marginBottom: -spacing.small,
    padding: shorthandHelper([0, spacing.small]),
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: shorthandHelper([0, spacing.small]),

    '& th': {
      width: 'calc(100% / 7)',
      textAlign: 'center',
      fontWeight: fontWeight.regular,
    },
  }),

  day: css({
    textAlign: 'center',
    color: colors.oxfordBlue,
  }),

  dayOut: css({
    color: hexToRgba(colors.oxfordBlue, 0.4),
  }),

  dayDisabled: css({
    color: hexToRgba(colors.oxfordBlue, 0.4),
    pointerEvents: 'none',
  }),

  dayWrapper: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: 24,
    height: 24,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.mystic,
    },
  }),

  dayWrapperOut: css({
    '&:hover': {
      backgroundColor: hexToRgba(colors.mystic, 0.5),
    },
  }),

  footer: css({
    display: 'flex',
    padding: spacing.default,

    '& > *': {
      flex: 1,
      padding: `${spacing.small}px !important`,
    },

    '& > * + *': {
      marginLeft: spacing.small,
    },
  }),
};

export default styles;

export const wrapperTheme = (theme) => {
  const themed = getThemeColors(theme);
  return css({
    '&:focus-within > div:last-child': {
      borderColor: themed.base,
      boxShadow: `0 0 0 2px ${hexToRgba(themed.base, 0.25)}`,
    },
  });
};

export const labelTheme = (theme) => {
  const themed = getThemeColors(theme);
  return css({
    '&:focus': {
      borderColor: themed.base,
      boxShadow: `0 0 0 2px ${hexToRgba(themed.base, 0.25)}`,
    },
  });
};

export const dayTheme = (theme, inMonth) => {
  const themed = getThemeColors(theme);
  return css({
    backgroundColor: hexToRgba(themed.base, inMonth ? 1 : 0.5),
    color: colors.white,
    fontWeight: fontWeight.bold,

    '&:hover': {
      backgroundColor: hexToRgba(themed.base, inMonth ? 1 : 0.5),
    },
  });
};

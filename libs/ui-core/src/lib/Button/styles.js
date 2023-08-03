import { css } from '@emotion/css'
import { borderRadius, spacing, fontFamily, fontSize, fontWeight, shorthandHelper, getThemeColors, colors, hexToRgba } from '@offerzen/design-tokens'

const styles = {
  button: css({
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: borderRadius.default,
    border: '1px solid transparent',
    color: colors.white,
    fontFamily: fontFamily.body,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.default,
    lineHeight: 1.4,
    whiteSpace: 'nowrap',

    '&:active': {
      boxShadow: `inset 0 1px 3px ${hexToRgba(colors.black, 0.1)}`,
    },

    '&:focus': {
      outline: 'none',
    },

    '&[disabled]': {
      opacity: 0.3,
      pointerEvents: 'none',
    },
  }),
}

export default styles

export const buttonVariant = (variant, theme) => {
  const themed = getThemeColors(theme)

  // Light theme is special in buttons
  if (theme === 'light') {
    switch (variant) {
      case 'outlined':
        return css({
          color: colors.jumbo,
          borderColor: themed.light,
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: hexToRgba(themed.light, 0.3),
            boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.1)}`,
          },

          '&:focus': {
            boxShadow: `0 0 4px 2px ${hexToRgba(themed.medium, 0.5)}`,
          },

          '&:active': {
            backgroundColor: hexToRgba(themed.light, 0.6),
          },
        })

      case 'dashed':
        return css({
          color: colors.jumbo,
          borderColor: themed.light,
          borderStyle: 'dashed',
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: hexToRgba(themed.light, 0.3),
            boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.1)}`,
          },

          '&:focus': {
            boxShadow: `0 0 4px 2px ${hexToRgba(themed.medium, 0.5)}`,
          },

          '&:active': {
            backgroundColor: hexToRgba(themed.light, 0.6),
          },
        })

      default:
        return css({
          color: colors.jumbo,
          backgroundColor: themed.light,

          '&:hover': {
            backgroundColor: hexToRgba(themed.medium, 0.8),
            boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.15)}`,
          },

          '&:focus': {
            boxShadow: `0 0 4px 2px ${hexToRgba(themed.base, 0.5)}`,
          },

          '&:active': {
            backgroundColor: themed.medium,
          },
        })
    }
  }

  switch (variant) {
    case 'outlined':
      return css({
        color: themed.base,
        borderColor: themed.base,
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: hexToRgba(themed.light, 0.8),
          boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.1)}`,
        },

        '&:focus': {
          boxShadow: `0 0 4px 2px ${hexToRgba(themed.medium, 0.2)}`,
        },

        '&:active': {
          backgroundColor: hexToRgba(themed.base, 0.25),
        },
      })

    case 'dashed':
      return css({
        color: themed.base,
        borderColor: themed.base,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: hexToRgba(themed.light, 0.8),
          boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.1)}`,
        },

        '&:focus': {
          boxShadow: `0 0 4px 2px ${hexToRgba(themed.medium, 0.2)}`,
        },

        '&:active': {
          backgroundColor: hexToRgba(themed.base, 0.25),
        },
      })

    default:
      return css({
        backgroundColor: themed.base,

        '&:hover': {
          backgroundColor: themed.medium,
          boxShadow: `0 2px 4px ${hexToRgba(colors.black, 0.1)}`,
        },

        '&:focus': {
          boxShadow: `0 0 4px 2px ${hexToRgba(themed.medium, 0.5)}`,
        },

        '&:active': {
          backgroundColor: themed.dark,
        },
      })
  }
}

export const buttonSize = size => {
  switch (size) {
    case 'small':
      return css({
        height: 30,
        fontSize: fontSize.small,
        padding: shorthandHelper([spacing.small, spacing.default]),
      })

    case 'medium':
      return css({
        height: 40,
        lineHeight: 1,
        padding: shorthandHelper([spacing.small, spacing.medium]),
      })

    default:
      return css({
        height: 35,
        padding: shorthandHelper([spacing.small, spacing.default]),
      })
  }
}

import { css } from '@emotion/css'
import { spacing, fontSize, fontWeight, fontFamily, colors } from '@offerzen/design-tokens'

const styles = {
  wrapper: css({
    display: 'inline-flex',
    fontFamily: fontFamily.body,
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold,
    lineHeight: 1.2,
    marginTop: spacing.extraSmall,
    color: colors.mandy,
  }),
}

export default styles

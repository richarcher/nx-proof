import { css } from '@emotion/css';
import {
  spacing,
  fontSize,
  fontWeight,
  fontFamily,
  colors,
} from '@offerzen/react/design-tokens';

const styles = {
  wrapper: css({
    display: 'inline-flex',
    fontWeight: fontWeight.semiBold,
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    lineHeight: 1.2,
    color: colors.jumbo,
    marginTop: spacing.extraSmall,
  }),
};

export default styles;

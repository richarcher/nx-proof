import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import styles, { buttonVariant, buttonSize } from './styles';

const Button = ({
  className,
  size,
  theme,
  variant = 'default',
  label,
  ...props
}) => (
  <button
    className={cx(
      styles.button,
      className,
      buttonSize(size),
      buttonVariant(variant, theme)
    )}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  theme: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'legacy',
    'light',
    'dark',
    'tertiary',
    'info',
  ]),
  size: PropTypes.oneOf(['', 'default', 'small', 'medium']),
  variant: PropTypes.oneOf(['', 'default', 'outlined', 'dashed']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'default',
};

export default Button;

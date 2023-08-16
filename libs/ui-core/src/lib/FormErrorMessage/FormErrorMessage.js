import PropTypes from 'prop-types'
import { cx } from '@emotion/css'
import styles from './styles'

const FormErrorMessage = ({ className, text }) => (
  <small className={cx(styles.wrapper, className)}>{text}</small>
)

FormErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default FormErrorMessage

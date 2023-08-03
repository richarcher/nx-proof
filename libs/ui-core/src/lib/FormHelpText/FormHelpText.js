import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const FormHelpText = ({ text }) => (
  <small className={styles.wrapper}>{text}</small>
)

FormHelpText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default FormHelpText

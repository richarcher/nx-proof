import PropTypes from 'prop-types'
import twemoji from 'twemoji'
import { cx } from '@emotion/css'

import styles from './styles'

const countryToUnicode = countryCode => {
  if (!countryCode) { return '' }

  const upperCountryCode = countryCode.toUpperCase()

  if (!upperCountryCode.match(/[A-Z]{2}/)) {
    return ''
  }

  const unicodeRegionsStart = 127397 // Letter A for unicode region code
  const codePoints = upperCountryCode.split('').map(char => unicodeRegionsStart + char.charCodeAt())

  return String.fromCodePoint(...codePoints)
}

const Flag = ({ countryCode, className }) => {
  const emojiCodePoints = countryToUnicode(countryCode)

  if (emojiCodePoints === '') return ''

  return (
    <span
      aria-hidden
      className={cx(styles.emoji, className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emojiCodePoints, {
          ext: '.png',
        }),
      }}
    />
  )
}

Flag.propTypes = {
  countryCode: PropTypes.string,
  className: PropTypes.string,
}

export default Flag

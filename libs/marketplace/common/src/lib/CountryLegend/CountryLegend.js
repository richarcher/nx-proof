import PropTypes from 'prop-types'

import Flag from '../Flag'

const CountryLegend = ({ countryCode, countryName }) => (
  <>
    <Flag countryCode={countryCode} />
    {' '}
    {countryName}
  </>
)

CountryLegend.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string.isRequired,
}

export default CountryLegend

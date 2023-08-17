import CountryLegend from './CountryLegend'

export default {
  component: CountryLegend,
}

export const Primary = {
  args: {
    countryCode: 'ZA',
    countryName: 'South Africa'
  },
};

export const NameOnly = {
  args: {
    countryName: 'South Africa'
  },
};
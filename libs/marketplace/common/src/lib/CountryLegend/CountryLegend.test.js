import { render, screen } from '@testing-library/react';
import CountryLegend from './CountryLegend'

test('rendering', () => {
  render(<CountryLegend countryCode='ZA' countryName='South Africa' />)

  expect(screen.getByText('South Africa')).toBeInTheDocument()
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('alt', '🇿🇦')
})

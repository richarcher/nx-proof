import React from 'react'
import { render, screen } from '@testing-library/react';
import Flag from './Flag'

describe('Flag', () => {
  describe('Renders the Twemoji flag for a ISO country code', () => {
    it('renders the South African flag for za', () => {
      render(<Flag countryCode="za" />)

      expect(screen.getByRole('img', { hidden: true })).toHaveProperty('src', 'https://twemoji.maxcdn.com/v/14.0.2/72x72/1f1ff-1f1e6.png')
    })

    it('renders the Netherlands flag for nl', () => {
      render(<Flag countryCode="nl" />)

      expect(screen.getByRole('img', { hidden: true })).toHaveProperty('src', 'https://twemoji.maxcdn.com/v/14.0.2/72x72/1f1f3-1f1f1.png')
    })

    it('renders the German flag for de', () => {
      render(<Flag countryCode="de" />)

      expect(screen.getByRole('img', { hidden: true })).toHaveProperty('src', 'https://twemoji.maxcdn.com/v/14.0.2/72x72/1f1e9-1f1ea.png')
    })
  })
})

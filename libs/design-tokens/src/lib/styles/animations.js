import { keyframes } from '@emotion/css'

export const flash = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
})

export const blink = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export const beat = keyframes({
  '30%': { opacity: 0.3 },
  '60%': { opacity: 0.5 },
  '100%': { opacity: 1 },
})

import { css } from '@emotion/css'

const styles = {
  emoji: css({
    display: 'inline-block',

    '& img': {
      fontSize: 'inherit',
      width: 'auto',
      height: '1em',
      verticalAlign: '-0.125em',
    },

  }),
}

export default styles

import { render } from '@testing-library/react';
import FormHelpText from './FormHelpText';

test('rendering a FormHelpText', () => {
  const { asFragment } = render(<FormHelpText text="HELP TEXT" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <small
        class="css-1e75ivf"
      >
        HELP TEXT
      </small>
    </DocumentFragment>
  `);
});

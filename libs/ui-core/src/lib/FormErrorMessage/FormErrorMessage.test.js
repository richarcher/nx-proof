import { render } from '@testing-library/react';
import FormErrorMessage from './FormErrorMessage';

test('rendering a FormErrorMessage', () => {
  const { asFragment } = render(<FormErrorMessage text="ERROR MESSAGE" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <small
        class="css-1wp8ens"
      >
        ERROR MESSAGE
      </small>
    </DocumentFragment>
  `);
});

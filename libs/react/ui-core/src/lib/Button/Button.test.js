import { render } from '@testing-library/react';
import Button from './Button';

test('rendering a button', () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="css-xa880g"
        type="button"
      />
    </DocumentFragment>
  `);
});

test('rendering a disabled button', () => {
  const { asFragment } = render(<Button disabled />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="css-xa880g"
        disabled=""
        type="button"
      />
    </DocumentFragment>
  `);
});

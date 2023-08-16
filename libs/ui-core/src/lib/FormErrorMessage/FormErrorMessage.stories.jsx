import componentName from './FormErrorMessage';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: FormErrorMessage,
  title: 'FormErrorMessage',
};

export const Primary = {
  args: {},
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormErrorMessage!/gi)).toBeTruthy();
  },
};

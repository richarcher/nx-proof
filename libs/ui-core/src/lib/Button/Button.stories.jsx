import componentName from './Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = {
  args: {},
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};

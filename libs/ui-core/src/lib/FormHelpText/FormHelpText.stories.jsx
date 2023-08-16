import componentName from './FormHelpText';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: FormHelpText,
  title: 'FormHelpText',
};

export const Primary = {
  args: {},
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormHelpText!/gi)).toBeTruthy();
  },
};

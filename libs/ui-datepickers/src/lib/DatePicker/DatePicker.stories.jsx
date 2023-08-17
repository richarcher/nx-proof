import componentName from './DatePicker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: DatePicker,
  title: 'DatePicker',
};

export const Primary = {
  args: {},
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DatePicker!/gi)).toBeTruthy();
  },
};

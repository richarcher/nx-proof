import type { Meta, StoryObj } from '@storybook/react';
import { StorybookHost } from './storybook-host';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof StorybookHost> = {
  component: StorybookHost,
  title: 'StorybookHost',
};
export default meta;
type Story = StoryObj<typeof StorybookHost>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to StorybookHost!/gi)).toBeTruthy();
  },
};

import Button from './Button';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    label: 'Click me!',
    type: 'button',
    size: 'default',
  },
  argTypes: {
    onClick: { action: true },
  },
};

export const Primary = {};

export const AltThemedButton = {
  args: {
    theme: 'secondary',
  },
};

export const SmallButton = {
  args: {
    size: 'small',
  },
};

export const VariantDashedButton = {
  args: {
    variant: 'dashed',
  },
};

export const VariantOutlineButton = {
  args: {
    variant: 'outlined',
  },
};

export const DisabledButton = {
  args: {
    disabled: true,
  },
};

Primary.play = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(/Click me!/gi)).toBeTruthy();

  await step('Click button', async () => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  });
};

DisabledButton.play = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(/Click me!/gi)).toHaveAttribute('disabled');
};

import DatePicker from './DatePicker';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  component: DatePicker,
  title: 'DatePicker',
};

export const Primary = {
  args: {},
};

export const Demo = {
  args: {},
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).toBeInTheDocument();
    await step('Open Datepicker', async () => {
      await userEvent.click(canvas.getByRole('textbox'));
      await expect(canvas.getByRole('table')).toBeInTheDocument()
      await expect(canvas.getByRole('row', { name: 'Su Mo Tu We Th Fr Sa' })).toBeInTheDocument()
      await sleep(1000);
    });
    await step('navigate to next month', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '▶' }));
      await sleep(1000);
    });
    await step('navigate to current month', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Today' }));
      await sleep(600);
    });
    await step('Close Datepicker', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Done' }));
    });
  },
};
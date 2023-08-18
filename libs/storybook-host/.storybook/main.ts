import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  refs: {
    pinata: {
      title: 'Piñata',
      url: 'https://master--621e37abc7a9e4004aa7ba12.chromatic.com/',
    },
    'spa-company-experience': {
      title: 'SPA Company Experience',
      url: 'https://master--6369c1f4f8eeb52699a5a947.chromatic.com/',
    },
    'spa-candidate-experience': {
      title: 'SPA Candidate Experience',
      url: 'https://master--6384bb30fb338537ff9fd667.chromatic.com/',
    },
    'spa-operations-experience': {
      title: 'SPA Operations Experience',
      url: 'https://master--64526c08d9156df324b7e423.chromatic.com/',
    },
    zenicon: {
      title: 'Zenicon',
      url: 'https://master--6401a1de1f00d2906e2374a9.chromatic.com/',
    },
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs

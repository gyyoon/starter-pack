const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('react-docgen-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};

import type { Preview } from '@storybook/react';

// Themes
import { default as themes } from '../src/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    chakra: {
      theme: themes
    }
  }
};

export default preview;

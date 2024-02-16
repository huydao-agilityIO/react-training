// SearchBar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Svg
import { SearchIcon } from '@shared/SVG';

// Components
import { SearchBar } from '@shared/components';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Search here...'
  }
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const SearchBarWithNoLeftRightElement: Story = {
  args: {}
};

export const SearchBarWithLeftElement: Story = {
  args: {
    leftContent: <SearchIcon />
  }
};

export const SearchBarWithRightElement: Story = {
  args: {
    rightContent: <SearchIcon />
  }
};

// Heading.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Images
import Brand from '@shared/assets/images/brand.png';

// Constants
import { SIDEBAR_MAPPING } from '@shared/constants';

// Components
import { Sidebar } from '@shared/components';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    urlBrand: Brand
  }
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: { sidebarMapping: SIDEBAR_MAPPING }
};

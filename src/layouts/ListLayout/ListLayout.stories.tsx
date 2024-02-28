// DashboardLayout.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Layouts
import { ListLayout } from '@shared/layouts';

const meta: Meta<typeof ListLayout> = {
  title: 'Layouts/ListLayout',
  component: ListLayout,
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
    title: 'Hospital staff'
  }
};

export default meta;
type Story = StoryObj<typeof ListLayout>;

export const Default: Story = {
  args: {}
};

export const LayoutWhenLoading: Story = {
  args: {
    isLoading: true
  }
};

// ActionDropdown.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ActionDropdown } from '@shared/components';

const meta: Meta<typeof ActionDropdown> = {
  title: 'Components/ActionDropdown',
  component: ActionDropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ActionDropdown>;

const ACTION_MAPPING = [
  {
    label: 'Edit',
    onClick: () => alert('active')
  }
];

export const Default: Story = {
  args: {
    actions: ACTION_MAPPING
  }
};

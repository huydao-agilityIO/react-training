// ActionDropdown.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { ACTION_MAPPING } from '@shared/constants';

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

export const Default: Story = {
  args: {
    actions: ACTION_MAPPING,
    onOpenModal: () => alert('active')
  }
};

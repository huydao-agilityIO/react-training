// Dropdown.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { VALID_INFO } from '@shared/constants';

// Utils
import { formatFullName } from '@shared/utils';

// Components
import { Dropdown } from '@shared/components';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    fullName: formatFullName(VALID_INFO.firstName, VALID_INFO.lastName),
    onMouseEnter: () => alert('Open dropdown'),
    onMouseLeave: () => alert('Close dropdown')
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    isOpen: false
  }
};

export const DropdownWhenHover: Story = {
  args: {
    isOpen: true
  }
};

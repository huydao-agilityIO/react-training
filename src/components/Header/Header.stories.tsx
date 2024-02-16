// Header.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Utils
import { formatFullName } from '@shared/utils';

// Constants
import { VALID_INFO } from '@shared/constants';

// Components
import { Header } from '@shared/components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    fullName: formatFullName(VALID_INFO.firstName, VALID_INFO.lastName)
  }
};
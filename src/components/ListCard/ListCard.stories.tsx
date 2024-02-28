// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ListCard } from '@shared/components';
import { HOSPITAL_STAFF } from '@shared/constants';

const meta: Meta<typeof ListCard> = {
  title: 'Components/ListCard',
  component: ListCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ListCard>;

export const Default: Story = {
  args: {
    cards: HOSPITAL_STAFF
  }
};

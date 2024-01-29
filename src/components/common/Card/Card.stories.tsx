// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { default as Card } from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/Common/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    name: 'Dr. Sysla J Smith',
    description: 'Doctor'
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    url: 'https://demo.dashboardpack.com/hospital-html/img/staf/3.png',
    name: 'Dr. Sysla J Smith'
  }
};

export const CardWithNoAvatar: Story = {};

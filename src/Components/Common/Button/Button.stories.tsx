// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    type: 'button',
    cursor: 'pointer',
    paddingX: 10,
    paddingY: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#2daab8',
    color: '#ffffff',
    background: '#2daab8',
    disabled: false,
    onClick: () => alert('Active')
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    isDisabled: false
  }
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: 'Disabled'
  }
};

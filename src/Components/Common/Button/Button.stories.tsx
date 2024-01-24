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
    sizes: 'sm',
    isDisabled: false,
    isLoading: false,
    onClick: () => alert('Active')
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' }
    },
    sizes: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    },
    type: {
      options: ['submit', 'button', 'reset'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'submit',
    variant: 'primary',
    children: 'Primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    isDisabled: true
  }
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading',
    isLoading: true
  }
};

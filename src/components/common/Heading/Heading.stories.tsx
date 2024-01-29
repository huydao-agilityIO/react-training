// Heading.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@chakra-ui/react';

const meta: Meta<typeof Heading> = {
  title: 'Components/Common/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'sm'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
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

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small'
  }
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium'
  }
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large'
  }
};

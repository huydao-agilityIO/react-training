// Heading.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@chakra-ui/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {}
};

export const AvatarWithImage: Story = {
  args: {
    src: 'https://bit.ly/code-beast'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'Small'
  }
};

export const Medium: Story = {
  args: {
    size: 'md',
    name: 'Medium'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    name: 'Large'
  }
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    name: 'X Large'
  }
};

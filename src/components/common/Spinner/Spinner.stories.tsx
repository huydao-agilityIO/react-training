// Spinner.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Spinner, Stack } from '@chakra-ui/react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Common/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'sm'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm'
  }
};

export const SpinnerWithDifferentSize: Story = {
  args: {
    variant: 'primary'
  },

  render: (args) => (
    <Stack spacing={3} direction="row">
      <Spinner size="xs" {...args} />
      <Spinner size="sm" {...args} />
      <Spinner size="md" {...args} />
      <Spinner size="lg" {...args} />
      <Spinner size="xl" {...args} />
    </Stack>
  )
};

// ProgressBar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProgressBar from '.';
import { Stack } from '@chakra-ui/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Common/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'danger', 'warning'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'default',
    value: 20
  },
  render: (args) => (
    <Stack width="2xl">
      <ProgressBar {...args} />
    </Stack>
  )
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
    value: 95
  },
  render: (args) => (
    <Stack width="2xl">
      <ProgressBar {...args} />
    </Stack>
  )
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
    value: 30
  },
  render: (args) => (
    <Stack width="2xl">
      <ProgressBar {...args} />
    </Stack>
  )
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
    value: 50
  },
  render: (args) => (
    <Stack width="2xl">
      <ProgressBar {...args} />
    </Stack>
  )
};

export const ProgressWithDifferentSize: Story = {
  args: {
    label: 'Default',
    variant: 'default',
    value: 50
  },
  render: (args) => (
    <Stack width="2xl">
      <ProgressBar {...args} size="xs" />
      <ProgressBar {...args} size="sm" />
      <ProgressBar {...args} />
      <ProgressBar {...args} size="lg" />
    </Stack>
  )
};

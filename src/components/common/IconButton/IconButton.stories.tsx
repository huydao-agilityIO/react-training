// IconButton.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, HStack } from '@chakra-ui/react';

// Icons
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  NotificationIcon
} from '@shared/SVG';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Common/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    type: 'button',
    size: 'sm',
    isDisabled: false,
    isLoading: false,
    onClick: () => alert('Active')
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: 'default',
    icon: <NotificationIcon />
  }
};

export const Primary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => (
    <HStack spacing={2}>
      <IconButton {...args} icon={<ChevronLeftIcon />} />
      <IconButton {...args} icon={<ChevronRightIcon />} />
    </HStack>
  )
};

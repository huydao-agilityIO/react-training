// Input.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@chakra-ui/react';

// Constants
import { INVALID_INFO, VALID_INFO } from '@shared/constants';

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'sm'
  },
  argTypes: {
    variant: {
      options: ['default', 'error', 'disabled'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default'
  }
};

export const FieldError: Story = {
  args: {
    variant: 'error',
    value: INVALID_INFO.email,
    isInvalid: true
  }
};

export const FieldDisabled: Story = {
  args: {
    variant: 'disabled',
    isDisabled: true,
    value: VALID_INFO.firstName
  }
};

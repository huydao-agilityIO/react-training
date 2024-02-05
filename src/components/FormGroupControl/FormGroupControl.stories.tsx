// FormGroupControl.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { INVALID_INFO } from '@shared/constants';

// Components
import FormGroupControl from './index';

const meta: Meta<typeof FormGroupControl> = {
  title: 'Components/FormGroupControl',
  component: FormGroupControl,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    type: 'text',
    placeholder: 'Default'
  }
};

export default meta;
type Story = StoryObj<typeof FormGroupControl>;

export const Default: Story = {
  args: {}
};

export const FieldWithErrorMessage: Story = {
  args: {
    value: INVALID_INFO.email,
    errorMessage: 'Email invalid'
  }
};

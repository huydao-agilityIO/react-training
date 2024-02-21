// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

// Components
import { CreatePatientForm } from '@shared/components';

const meta: Meta<typeof CreatePatientForm> = {
  title: 'Components/Patient/CreatePatientForm',
  component: CreatePatientForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <FormProvider {...useForm()}>
        <Story />
      </FormProvider>
    )
  ],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CreatePatientForm>;

export const Default: Story = {
  args: {
    isOpen: true,
    onSubmit: () => alert('create a new patient success!!!')
  }
};

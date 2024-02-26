// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

// Components
import { EditPatientForm } from '@shared/components';

const meta: Meta<typeof EditPatientForm> = {
  title: 'Components/Patient/EditPatientForm',
  component: EditPatientForm,
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
  tags: ['autodocs'],
  args: {
    isOpen: true
  }
};

export default meta;
type Story = StoryObj<typeof EditPatientForm>;

export const Default: Story = {
  args: {
    onSubmit: () => alert('create a new patient success!!!')
  }
};

export const FormWhenSubmitting = {
  args: {
    isLoading: true
  }
};

export const FormWhenError = {
  args: {
    errorResponseAPI: 'The information has not been changed!'
  }
};

export const FormWhenFetchData = {
  args: {
    isLoadingFetchDataInitial: true
  }
};

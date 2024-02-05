// RegisterForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

// Components
import RegisterForm from './index';

const meta: Meta<typeof RegisterForm> = {
  title: 'Components/Author/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <FormProvider {...useForm()}>
          <Story />
        </FormProvider>
      </MemoryRouter>
    )
  ],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    onSubmitForm: () => alert('handles submit form register')
  }
};

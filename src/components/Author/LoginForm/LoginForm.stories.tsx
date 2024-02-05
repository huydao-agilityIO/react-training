// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

// Components
import LoginForm from './index';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/Author/LoginForm',
  component: LoginForm,
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
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmitForm: () => alert('handles submit form login')
  }
};

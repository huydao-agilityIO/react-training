// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { DeletePatientModal } from '@shared/components';

const meta: Meta<typeof DeletePatientModal> = {
  title: 'Components/Patient/DeletePatientModal',
  component: DeletePatientModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DeletePatientModal>;

export const Default: Story = {
  args: {
    isOpenModalDeletePatient: true,
    onDeletePatient: () => alert('create a new patient success!!!')
  }
};

export const ModalWhenDeleting: Story = {
  args: {
    isOpenModalDeletePatient: true,
    isLoadingDeletePatient: true
  }
};

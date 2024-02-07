// Table.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { PATIENT_HEADING_MAPPING } from '@shared/constants';

// Components
import { DataTable } from '@shared/components';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Common/Table',
  component: DataTable,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    headingMapping: PATIENT_HEADING_MAPPING,
    data: []
  }
};

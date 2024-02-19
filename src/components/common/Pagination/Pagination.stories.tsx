// Pagination.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@shared/components';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    totalPage: 5
  }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    onChangePage(pageNumber: number) {
      alert(`move on ${pageNumber}`);
    }
  }
};

export const DisablePreviousPage: Story = {
  args: {
    currentPage: 1
  }
};

export const DisableNumberPage: Story = {
  args: {
    currentPage: 3
  }
};

export const DisableNextPage: Story = {
  args: {
    currentPage: 5
  }
};

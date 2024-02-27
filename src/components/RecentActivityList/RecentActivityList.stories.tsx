// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { RECENT_ACTIVITY } from '@shared/constants';

// Components
import { RecentActivityList } from '@shared/components';

const meta: Meta<typeof RecentActivityList> = {
  title: 'Components/RecentActivityList',
  component: RecentActivityList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RecentActivityList>;

export const Default: Story = {
  args: {
    items: RECENT_ACTIVITY
  }
};

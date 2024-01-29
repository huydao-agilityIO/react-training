// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@chakra-ui/react';

// Router
import { BrowserRouter } from 'react-router-dom';

// Components
import { TextLink as TextLinkRouter } from './index';

const meta: Meta<typeof Text> = {
  title: 'Components/Common/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'sm'
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'helper',
        'link',
        'default'
      ],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success'
  }
};

export const TextError: Story = {
  args: {
    variant: 'error',
    size: 'xs',
    children: 'Text Error'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning'
  }
};

export const TextHelper: Story = {
  args: {
    variant: 'helper',
    size: 'md',
    children: 'Text Helper'
  }
};

export const TextLink: Story = {
  args: {
    variant: 'link',
    size: 'lg',
    fontWeight: 'medium'
  },
  render: (args) => (
    <BrowserRouter>
      <TextLinkRouter
        link="Link"
        pathRouter="#"
        onClick={() => alert('Active')}
        {...args}>
        Text
      </TextLinkRouter>
    </BrowserRouter>
  )
};

export const XSmall: Story = {
  args: {
    size: 'xs',
    children: 'Size XSmall'
  }
};

export const Small: Story = {
  args: {
    children: 'Size Small'
  }
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Size Medium'
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Size Large'
  }
};

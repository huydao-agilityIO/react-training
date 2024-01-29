import { defineStyleConfig } from '@chakra-ui/react';

const progressTheme = defineStyleConfig({
  baseStyle: {
    size: 'sm'
  },
  variants: {
    default: {
      filledTrack: {
        bg: 'primary.500'
      }
    },
    success: {
      filledTrack: {
        bg: 'success.200'
      }
    },
    danger: {
      filledTrack: {
        bg: 'danger.200'
      }
    },
    warning: {
      filledTrack: {
        bg: 'warning.200'
      }
    }
  },
  defaultProps: {
    variant: 'default',
    size: 'sm'
  }
});

export default progressTheme;

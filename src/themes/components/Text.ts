import { defineStyleConfig } from '@chakra-ui/react';

const textTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal'
  },
  variants: {
    primary: {
      color: 'primary.200'
    },
    secondary: {
      color: 'secondary.300'
    },
    success: {
      color: 'success.200'
    },
    error: {
      color: 'danger.200'
    },
    warning: {
      color: 'warning.200'
    },
    helper: {
      color: 'dark.100'
    },
    link: {
      color: 'dark.50'
    },
    header: {
      color: 'light.200'
    }
  },
  sizes: {
    xs: {
      fontSize: 'xs',
      lineHeight: '4'
    },
    sm: {
      fontSize: 'md',
      lineHeight: 'tall'
    },
    md: {
      fontSize: 'md',
      lineHeight: '5'
    },
    lg: {
      fontSize: 'lg',
      lineHeight: '5'
    }
  },
  defaultProps: {
    variant: 'primary',
    size: 'sm'
  }
});

export default textTheme;

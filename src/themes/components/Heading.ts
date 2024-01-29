import { defineStyleConfig } from '@chakra-ui/react';

const headingTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'semibold'
  },
  variants: {
    primary: {
      color: 'primary.400'
    },
    secondary: {
      color: 'secondary.400'
    }
  },
  sizes: {
    sm: {
      fontSize: '2xl',
      lineHeight: 'shorter'
    },
    md: {
      fontSize: '3xl',
      lineHeight: 'shorter'
    },
    lg: {
      fontSize: '3xl',
      lineHeight: '6'
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});

export default headingTheme;

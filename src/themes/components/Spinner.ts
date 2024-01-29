import { extendTheme, defineStyle } from '@chakra-ui/react';

const spinnerTheme = extendTheme({
  baseStyle: {
    borderWidth: 4
  },
  variants: {
    primary: {
      color: 'primary.200'
    },
    secondary: {
      color: 'secondary.200'
    }
  },
  sizes: {
    xs: defineStyle({
      width: 4,
      height: 4
    }),
    sm: defineStyle({
      width: 8,
      height: 8
    }),
    md: defineStyle({
      width: 10,
      height: 10
    }),
    lg: defineStyle({
      width: 12,
      height: 12
    }),
    xl: defineStyle({
      width: 14,
      height: 14
    })
  },
  defaultProps: {
    variant: 'primary',
    size: 'sm'
  }
});

export default spinnerTheme;

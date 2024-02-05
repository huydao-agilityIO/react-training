import { defineStyleConfig } from '@chakra-ui/react';

const inputFieldTheme = defineStyleConfig({
  baseStyle: {
    field: {
      fontWeight: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'base',
      _placeholder: {
        color: 'dark.50',
        fontSize: 'md',
        fontWeight: 'md'
      }
    }
  },
  variants: {
    default: {
      field: {
        color: 'dark.50',
        borderColor: 'light.50'
      }
    },
    error: {
      field: {
        color: 'danger.100',
        borderColor: 'danger.100'
      }
    },
    disabled: {
      field: {
        bg: 'dark.50'
      }
    }
  },
  sizes: {
    sm: {
      field: {
        fontSize: 'md',
        px: 2.5,
        py: 5,
        h: 12
      }
    },
    md: {
      field: {
        fontSize: 'lg',
        paddingLeft: 20,
        paddingRight: 15,
        py: 'px',
        h: 12
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'default'
  }
});

export default inputFieldTheme;

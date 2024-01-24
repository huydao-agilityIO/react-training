import { defineStyleConfig } from '@chakra-ui/react';

const primaryStyles = {
  bg: 'primary.300',
  borderColor: 'primary.300',
  color: 'light.300'
};

const secondaryStyles = {
  bg: 'dark.100',
  borderColor: 'dark.100',
  color: 'light.200'
};

const buttonTheme = defineStyleConfig({
  baseStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    fontWeight: 'medium',
    textTransform: 'capitalize'
  },
  variants: {
    primary: {
      ...primaryStyles,
      _hover: {
        bg: 'light.300',
        borderColor: 'secondary.500',
        color: 'primary.300',
        _disabled: {
          ...primaryStyles
        }
      }
    },
    secondary: {
      ...secondaryStyles,
      _hover: {
        bg: 'light.200',
        color: 'dark.100',
        _disabled: {
          ...secondaryStyles
        }
      }
    }
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      lineHeight: '4',
      paddingX: 3,
      paddingY: 6
    },
    md: {
      fontSize: 'md',
      lineHeight: '5',
      paddingX: 5,
      paddingY: 8
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});

export default buttonTheme;

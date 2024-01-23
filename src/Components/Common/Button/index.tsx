import { ReactNode } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonComponentProps extends ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
}

const ButtonComponent = ({
  children,
  isDisabled,
  ...props
}: ButtonComponentProps) => {
  // Style hover of button enabled
  const hoverStyle = {
    ...(!isDisabled && {
      _hover: {
        background: '#ffffff',
        borderColor: '#313f5a',
        color: '#2daab8'
      }
    }),
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  };

  return (
    <Button {...props} isDisabled={isDisabled} {...hoverStyle}>
      {children}
    </Button>
  );
};
export default ButtonComponent;

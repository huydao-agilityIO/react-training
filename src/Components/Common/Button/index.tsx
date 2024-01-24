import { ReactNode, memo } from 'react';
import { ButtonProps, Button } from '@chakra-ui/react';

interface ButtonComponentProps extends ButtonProps {
  children: ReactNode;
  variants?: 'primary' | 'secondary';
  sizes?: 'sm' | 'md';
}

const ButtonComponent = ({
  children,
  variants = 'primary',
  sizes = 'sm',
  ...props
}: ButtonComponentProps) => {
  return (
    <Button variant={variants} size={sizes} {...props}>
      {children}
    </Button>
  );
};

export default memo(ButtonComponent);

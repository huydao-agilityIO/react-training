import { ChangeEventHandler } from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

interface FormGroupControlProps {
  type: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FormGroupControl = ({
  type,
  id,
  placeholder,
  value,
  errorMessage,
  onChange
}: FormGroupControlProps) => (
  <FormControl isInvalid={!!errorMessage}>
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      variant={errorMessage ? 'error' : 'default'}
      onChange={onChange}
    />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </FormControl>
);

export default FormGroupControl;

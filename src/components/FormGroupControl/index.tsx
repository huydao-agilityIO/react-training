import { ChangeEventHandler } from 'react';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

interface FormGroupControlProps {
  type?: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  errorMessage?: string;
  defaultValue?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const FormGroupControl = ({
  type = 'text',
  id = '',
  placeholder = '',
  value = '',
  errorMessage = '',
  defaultValue = '',
  name = '',
  onChange
}: FormGroupControlProps) => (
  <FormControl isInvalid={!!errorMessage}>
    <Input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      variant={errorMessage ? 'error' : 'default'}
      onChange={onChange}
    />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </FormControl>
);

export default FormGroupControl;

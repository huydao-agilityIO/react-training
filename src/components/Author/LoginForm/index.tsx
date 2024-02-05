import { Control, Controller } from 'react-hook-form';
import { Button } from '@chakra-ui/react';

// Constants
import { ROUTE } from '@shared/constants';

// Types
import { Authentication } from '@shared/types';

// Utils
import { FORM_SCHEMA } from '@shared/utils/validators';

// Components
import AuthFormContainer from '../AuthFormContainer';
import { FormGroupControl } from '@shared/components';

interface LoginFormProps {
  control?: Control<Omit<Authentication, 'fullName'>>;
  isLoading?: boolean;
  errorResponseAPI?: string;
  onSubmitForm?: () => void;
}

const LoginForm = ({
  control,
  isLoading,
  errorResponseAPI,
  onSubmitForm
}: LoginFormProps) => (
  <AuthFormContainer
    idForm="loginFom"
    mainTitle="Log in"
    linkRouter="Sign Up"
    pathRouter={ROUTE.REGISTER_PAGE}
    errorResponseAPI={errorResponseAPI}
    onSubmit={onSubmitForm}>
    <Controller
      name="email"
      control={control}
      rules={FORM_SCHEMA.EMAIL}
      render={({
        field: { value, onChange, ...rest },
        fieldState: { error }
      }) => {
        return (
          <FormGroupControl
            type="email"
            id="email"
            placeholder="Enter your email"
            value={value}
            errorMessage={error?.message}
            onChange={onChange}
            {...rest}
          />
        );
      }}
    />
    <Controller
      name="password"
      control={control}
      rules={FORM_SCHEMA.PASSWORD}
      render={({
        field: { value, onChange, ...rest },
        fieldState: { error }
      }) => {
        return (
          <FormGroupControl
            type="password"
            id="password"
            placeholder="Password"
            value={value}
            errorMessage={error?.message}
            onChange={onChange}
            {...rest}
          />
        );
      }}
    />
    <Button type="submit" w="full" isLoading={isLoading}>
      Log In
    </Button>
  </AuthFormContainer>
);

export default LoginForm;

import { FormEventHandler } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Button, Checkbox, HStack, Spinner } from '@chakra-ui/react';

// Utils
import { FORM_SCHEMA } from '@shared/utils';

// Types
import { Authentication } from '@shared/types';

// Constants
import { ROUTE } from '@shared/constants';

// Components
import AuthFormContainer from '../AuthFormContainer';
import { FormGroupControl } from '@shared/components';

interface AuthFormProps {
  control?: Control<Authentication>;
  isLoading?: boolean;
  errorResponseAPI?: string;
  onSubmitForm?: FormEventHandler<HTMLFormElement>;
}

const RegisterForm = ({
  isLoading = false,
  errorResponseAPI = '',
  control,
  onSubmitForm
}: AuthFormProps) => (
  <AuthFormContainer
    idForm="registerFom"
    mainTitle="Register"
    linkRouter="Log in"
    pathRouter={ROUTE.LOGIN_PAGE}
    errorResponseAPI={errorResponseAPI}
    onSubmit={onSubmitForm}>
    <HStack w="full">
      <Controller
        name="firstName"
        control={control}
        rules={FORM_SCHEMA.FIRST_NAME}
        render={({
          field: { value, onChange, ...rest },
          fieldState: { error }
        }) => {
          return (
            <FormGroupControl
              type="text"
              id="firstName"
              placeholder="First Name"
              value={value}
              errorMessage={error?.message}
              onChange={onChange}
              {...rest}
            />
          );
        }}
      />
      <Controller
        name="lastName"
        control={control}
        rules={FORM_SCHEMA.LAST_NAME}
        render={({
          field: { value, onChange, ...rest },
          fieldState: { error }
        }) => {
          return (
            <FormGroupControl
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={value}
              errorMessage={error?.message}
              onChange={onChange}
              {...rest}
            />
          );
        }}
      />
    </HStack>
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
    <Checkbox
      size="lg"
      color="dark.50"
      colorScheme="gray"
      isDisabled={isLoading}>
      Keep me up to date
    </Checkbox>

    <Button
      type="submit"
      w="full"
      isLoading={isLoading}
      spinner={<Spinner color="light.300" />}>
      Sign up
    </Button>
  </AuthFormContainer>
);

export default RegisterForm;

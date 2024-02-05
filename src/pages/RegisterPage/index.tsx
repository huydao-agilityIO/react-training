import { useForm } from 'react-hook-form';

// Apis
import { useSignUpAuth } from '@shared/apis/auth';

// Types
import { Authentication } from '@shared/types';

// Components
import { RegisterForm } from '@shared/components';

const RegisterPage = () => {
  const { control, handleSubmit } = useForm<Authentication>();

  const {
    data: responseAPI,
    isLoading,
    mutateAsync: addNewAuth
  } = useSignUpAuth();

  const handleSubmitFormRegister = async (payloadData: Authentication) => {
    await addNewAuth(payloadData);
  };
  return (
    <RegisterForm
      control={control}
      isLoading={isLoading}
      errorResponseAPI={responseAPI}
      onSubmitForm={handleSubmit(handleSubmitFormRegister)}
    />
  );
};

export default RegisterPage;

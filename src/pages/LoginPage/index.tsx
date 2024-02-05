import { useForm } from 'react-hook-form';

// Apis
import { useSignInAuth } from '@shared/apis';

// Types
import { Authentication } from '@shared/types';

// Components
import { LoginForm } from '@shared/components';

const LoginPage = () => {
  const { control, handleSubmit } = useForm<Omit<Authentication, 'fullName'>>();

  const {
    data: responseAPI,
    isLoading,
    mutateAsync: addNewAuth
  } = useSignInAuth();

  const handleSubmitFormLogin = async (
    payloadData: Omit<Authentication, 'fullName'>
  ) => {
    await addNewAuth(payloadData);
  };

  return (
    <LoginForm
      control={control}
      isLoading={isLoading}
      errorResponseAPI={responseAPI}
      onSubmitForm={handleSubmit(handleSubmitFormLogin)}
    />
  );
};

export default LoginPage;

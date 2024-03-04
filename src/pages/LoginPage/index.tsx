import { memo } from 'react';

import { useForm } from 'react-hook-form';

// Apis
import { useSignInAuth } from '@shared/apis';

// Hocs
import { withIsUnAuth } from '@shared/hocs';

// Types
import { ACTION, Authentication } from '@shared/types';

// Components
import { LoginForm } from '@shared/components';
import { useAuth } from '@shared/hooks';

const Component = () => {
  const { control, handleSubmit } = useForm<Authentication>();
  const { dispatch } = useAuth();

  const {
    isLoading,
    mutateAsync: addNewAuth,
    error: errorAPI
  } = useSignInAuth();

  const handleSubmitFormLogin = async (payloadData: Authentication) => {
    await addNewAuth(payloadData, {
      onSuccess: (data) => {
        dispatch({
          type: ACTION.LOG_IN,
          payload: {
            ...data,
            isAuth: true
          }
        });
      }
    });
  };

  return (
    <LoginForm
      control={control}
      isLoading={isLoading}
      errorResponseAPI={errorAPI as string}
      onSubmitForm={handleSubmit(handleSubmitFormLogin)}
    />
  );
};

const LoginPage = memo(withIsUnAuth(Component));

export default LoginPage;

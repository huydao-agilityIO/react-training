import { useMutation } from 'react-query';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// Constants
import { API_HOSPITAL_MANAGEMENT, ROUTE } from '@shared/constants';

// Services
import { postData } from '@shared/services';

// Types
import { Authentication } from '@shared/types';

export const useSignUpAuth = () => {
  const navigate: NavigateFunction = useNavigate();
  const { data, isLoading, ...rest } = useMutation({
    mutationFn: (auth: Authentication) =>
      postData(API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_UP, auth),
    mutationKey: ['auth'],
    onSuccess: async (data: string) => {
      if (typeof data !== 'string') {
        navigate(ROUTE.LOGIN_PAGE);
      }
    }
  });

  return {
    data,
    isLoading,
    ...rest
  };
};

export const useSignInAuth = () => {
  const navigate: NavigateFunction = useNavigate();
  const { data, isLoading, ...rest } = useMutation({
    mutationFn: (auth: Authentication) =>
      postData(API_HOSPITAL_MANAGEMENT.AUTHENTICATION_SIGN_IN, auth),
    mutationKey: ['auth'],
    onSuccess: async (data) => {
      if (typeof data !== 'string') {
        navigate(ROUTE.DASHBOARD);
      }
    }
  });

  return {
    data,
    isLoading,
    ...rest
  };
};

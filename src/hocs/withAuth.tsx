import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

// Constants
import { ROUTE } from '@shared/constants';

// Hooks
import { useAuth } from '@shared/hooks';

export const withIsAuth = <T extends object>(
  Component: FunctionComponent<T>
) => {
  const AuthComponent = (props: T) => {
    const { state } = useAuth();
    const { isAuth } = state.auth || {};

    if (!isAuth) return <Navigate to={ROUTE.LOGIN_PAGE} />;

    return <Component {...props} />;
  };

  return AuthComponent;
};

export const withIsUnAuth = <T extends object>(
  Component: FunctionComponent<T>
) => {
  const AuthComponent = (props: T) => {
    const { state } = useAuth();
    const { isAuth } = state.auth || {};

    if (isAuth) return <Navigate to={ROUTE.DASHBOARD} replace />;

    return <Component {...props} />;
  };

  return AuthComponent;
};

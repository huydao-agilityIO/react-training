import { ACTION, AuthAction, AuthState } from '@shared/types';

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case ACTION.LOG_IN: {
      localStorage.setItem(
        'auth',
        JSON.stringify({ ...action.payload, isAuth: true })
      );

      return { auth: { ...action.payload, isAuth: true } };
    }

    case ACTION.LOG_OUT:
      localStorage.setItem(
        'auth',
        JSON.stringify({ ...action.payload, isAuth: false })
      );
      return { auth: { ...action.payload, isAuth: false } };

    default:
      return state;
  }
};

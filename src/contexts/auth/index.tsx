import {
  Context,
  ReactElement,
  Reducer,
  createContext,
  useMemo,
  useReducer
} from 'react';

// Types
import { AuthAction, AuthContextType, AuthState } from '@shared/types';
import { authReducer } from '@shared/stores';

export const initData = {
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  avatarURL: '',
  password: '',
  isAuth: false
};

export const AuthContext: Context<AuthContextType | null> =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
    authReducer,
    {
      auth: JSON.parse(localStorage.getItem('auth') ?? 'null') ?? initData // get init data from local, and if underfine -> initData
    }
  );

  const contextValue: AuthContextType = useMemo(
    () => ({ state, dispatch }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

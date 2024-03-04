import { Context, ReactNode, Reducer, createContext, useReducer } from 'react';

// Types
import { AuthAction, AuthContextType, AuthState } from '@shared/types';
import { authReducer } from '@shared/stores';

const initData = {
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
    authReducer,
    {
      auth: JSON.parse(localStorage.getItem('auth') ?? 'null') ?? initData // get init data from local, and if underfine -> initData
    }
  );

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

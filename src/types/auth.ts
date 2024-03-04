import { Dispatch } from 'react';

// Types
import { AuthAction, Authentication } from '@shared/types';

export interface AuthState {
  auth: Authentication;
}

export interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

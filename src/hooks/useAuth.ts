import { useContext } from 'react';

// Contexts
import { AuthContext } from '@shared/contexts';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Have not used provider yet');
  }

  return context;
};

export default useAuth;

import { Box } from '@chakra-ui/react';
import { AuthProvider, AuthContext, initData } from '@shared/contexts';
import { AuthContextType } from '@shared/types';

describe('AuthProvider', () => {
  const initialState = {
    auth: {
      ...initData
    }
  };

  it('provides initial state and dispatch to children components', () => {
    testLibReactUtils.render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(context: AuthContextType | null) => {
            expect(context?.state).toEqual(initialState);
            expect(context?.dispatch).toBeDefined();

            return <Box>test</Box>;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(testLibReactUtils.screen.getByText('test')).toBeInTheDocument();
  });
});

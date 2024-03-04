import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import configThemes from '@shared/themes';

// Routers
import { routes } from '@shared/routers';

// Contexts
import { AuthProvider } from '@shared/contexts';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={configThemes}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;

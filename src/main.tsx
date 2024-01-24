import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import configThemes from '@shared/themes';

// Components
import App from '@shared/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={configThemes}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

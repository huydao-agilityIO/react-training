import { extendTheme } from '@chakra-ui/react';

// Bases
import {
  breakpoints,
  colors,
  radius,
  sizes,
  spacing,
  typographies,
  zIndices
} from './bases';

// Components
import { Button } from './components';

const configThemes = extendTheme({
  breakpoints,
  colors,
  radius,
  sizes,
  spacing,
  typographies,
  zIndices,
  components: {
    Button
  },
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        bg: 'light.200'
      }
    }
  }
});

export default configThemes;

import { extendTheme } from '@chakra-ui/react';

// Font family
import '@fontsource/poppins';
import '@fontsource/rajdhani';

// Bases
import {
  breakpoints,
  colors,
  radius,
  sizes,
  spacing,
  typographies,
  zIndices,
  shadows
} from './bases';

// Components
import {
  Button,
  Heading,
  Text,
  Avatar,
  Spinner,
  Progress,
  InputField
} from './components';

const configThemes = extendTheme({
  breakpoints,
  colors,
  ...radius,
  shadows,
  ...sizes,
  ...spacing,
  ...typographies,
  zIndices,
  components: {
    Button,
    Heading,
    Text,
    Avatar,
    Spinner,
    Progress,
    Input: InputField
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

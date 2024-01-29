import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

import { avatarAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const sizes = {
  sm: definePartsStyle({
    container: defineStyle({
      width: 7.5,
      height: 7.5
    })
  }),
  md: definePartsStyle({
    container: defineStyle({
      width: 45,
      height: 45
    })
  }),
  lg: definePartsStyle({
    container: defineStyle({
      width: 69,
      height: 69
    })
  }),
  xl: definePartsStyle({
    container: defineStyle({
      width: 29.5,
      height: 29.5
    })
  })
};

export const avatarTheme = defineMultiStyleConfig({ sizes });

export default avatarTheme;

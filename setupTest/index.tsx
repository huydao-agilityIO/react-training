import '@testing-library/jest-dom';
import React from 'react';
import * as jestFunc from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

// Font family
import '@fontsource/poppins';
import '@fontsource/rajdhani';

// Mock font
jest.mock('@fontsource/poppins', () => ({}));
jest.mock('@fontsource/rajdhani', () => ({}));

jest.mock('dayjs', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    format: jest.fn()
  }))
}));

// Themes
import configThemes from '../src/themes';

const customRender = <
  Q extends jestFunc.Queries = typeof jestFunc.queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: React.ReactElement,
  options?: jestFunc.RenderOptions<Q, Container, BaseElement>
) =>
  jestFunc.render(ui, {
    ...options,
    wrapper: ({ children }: { children: React.ReactElement }) => {
      const CustomWrapper = options?.wrapper
        ? options.wrapper
        : ({ children }: { children: React.ReactElement }) => children;

      return (
        <ChakraProvider theme={configThemes}>
          <CustomWrapper>{children}</CustomWrapper>
        </ChakraProvider>
      );
    }
  });

globalThis.testLibReactUtils = { ...jestFunc, render: customRender };

export default { ...jestFunc, render: customRender };

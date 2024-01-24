import React from 'react';
import * as jestFunc from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import configThemes from '@shared/themes';

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

export default { ...jestFunc, render: customRender };

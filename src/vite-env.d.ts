/// <reference types="vite/client" />
import jestSetup from '../setupTest';

declare global {
  // eslint-disable-next-line no-var
  var testLibReactUtils: typeof jestSetup;
}

export {};

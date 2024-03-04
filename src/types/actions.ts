import { Authentication } from '@shared/types';

export enum ACTION {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT'
}

export type AuthAction =
  | { type: ACTION.LOG_IN; payload: Authentication }
  | { type: ACTION.LOG_OUT; payload: Authentication };

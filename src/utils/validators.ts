import { ERROR_MESSAGES, REGEX_PATTERN } from '@shared/constants';

export const FORM_SCHEMA = {
  FIRST_NAME: {
    required: ERROR_MESSAGES.REQUIRED('First Name')
  },
  LAST_NAME: {
    required: ERROR_MESSAGES.REQUIRED('Last Name')
  },
  EMAIL: {
    required: ERROR_MESSAGES.REQUIRED('Email'),
    pattern: {
      value: REGEX_PATTERN.EMAIL,
      message: ERROR_MESSAGES.FORMAT('Email')
    }
  },
  PASSWORD: {
    required: ERROR_MESSAGES.REQUIRED('Password'),
    pattern: {
      value: REGEX_PATTERN.PASSWORD,
      message: ERROR_MESSAGES.FORMAT('Password')
    }
  }
};

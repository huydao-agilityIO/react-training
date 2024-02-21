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

export const VALIDATION_FORM_PATIENT = {
  FIRST_NAME: {
    required: ERROR_MESSAGES.REQUIRED('First Name')
  },
  LAST_NAME: {
    required: ERROR_MESSAGES.REQUIRED('Last Name')
  },
  DEPARTMENT: {
    required: ERROR_MESSAGES.REQUIRED('Department')
  },
  APPOINTMENT_DATE: {
    required: ERROR_MESSAGES.REQUIRED('Appointment date')
  },
  SERIAL_NUMBER: {
    required: ERROR_MESSAGES.REQUIRED('Serial number'),
    pattern: {
      value: REGEX_PATTERN.NUMBER,
      message: ERROR_MESSAGES.FORMAT('Serial number')
    }
  },
  AMOUNT: {
    required: ERROR_MESSAGES.REQUIRED('Amount'),
    pattern: {
      value: REGEX_PATTERN.NUMBER,
      message: ERROR_MESSAGES.FORMAT('Amount')
    }
  }
};

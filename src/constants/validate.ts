export const REGEX_PATTERN = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
  PASSWORD: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/
};

export const ERROR_MESSAGES = {
  REQUIRED: (ariaLabel: string) => `${ariaLabel} field is required`,
  FORMAT: (ariaLabel: string) => `${ariaLabel} must be a valid ${ariaLabel}`,

  EMAIL_EXISTED: 'Email already exists!'
};

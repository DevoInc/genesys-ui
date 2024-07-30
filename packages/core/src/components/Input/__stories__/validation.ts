import { InputProps } from '../Input';

// TODO: Extract as a helper for the user
const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

export type ValidationMsg = {
  helper: string;
  status: InputProps['status'];
};

export const validationMsgs: {
  valid: ValidationMsg;
  error: ValidationMsg;
  idle: ValidationMsg;
} = {
  idle: {
    helper: 'Enter a valid email',
    status: 'base',
  },
  valid: {
    helper: 'Email is valid',
    status: 'success',
  },
  error: {
    helper:
      'The format is not valid. Be sure it follows the pattern something@something[.com, .es...]',
    status: 'error',
  },
};

export const getValidation = (email: string): ValidationMsg => {
  if (email === '') return validationMsgs.idle;
  const isValid = email.match(emailRegex);
  if (isValid) {
    return validationMsgs.valid;
  } else {
    return validationMsgs.error;
  }
};

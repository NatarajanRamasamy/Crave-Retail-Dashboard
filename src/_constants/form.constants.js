export const PASSWORD_LENGTH = 4;

export const MISSING_NUMBER_CHARACTER = 'Password must contain at least one number.';
export const ONLY_NUMBER_CHARACTER = 'Password should only contain numbers.';

export const MISSING_LOWERCASE_CHARACTER = 'Password must contain at least one lowercase character.';

export const MISSING_UPPERCASE_CHARACTER = 'Password must contain at least one uppercase character.';

// export const MISSING_SPECIAL_CHARACTER = 'Password must contain at least one special character.';

export const DEFAULT_OFFSET_VALUE = 0;

export const DEFAULT_LIMIT_VALUE = 20;

export const APP_MAIN_ROUTE = '/home';

export const LOGIN_ROUTE = '/login';

export const CUSTOMER_INDEX_ROUTE = '/customers';

export const FORBIDDEN = 403;

export const NOT_FOUND = 404;

export const UNAUTHORIZED = 401;

export const VALIDATION_ERROR = 422;

export const EMAIL_VALIDATED = 'Email has been validated successfully.';

export const CHANGED_PASSWORD = 'Your password was changed successfully.';

export const INVALID_PHONE_NUMBER = 'Phone number must begin with your country code. For example: +3534325551212.';

export const REQUIRED = resource => `${resource} is required.`;

export const INVALID = resource => `${resource} is invalid.`;

export const UNMATCHED_PASSWORDS = resource => 'The passwords you have entered do not match.';

export const LENGTH_REQUIRED = (resource, options) => {
  const { min, max } = options;
  if (min && max) {
    return `${resource} must have ${min} numbers.`;
  } if (min) {
    return `${resource} must have more than ${min} characters.`;
  }
  return `${resource} must have  ${max} characters.`;
};

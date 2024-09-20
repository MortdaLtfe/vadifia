/**
 * A regular expression that matches valid phone numbers in Canada.
 * @example
 * "+14161234567"
 * "4161234567"
 */
export const CA_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+1)?\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/
);

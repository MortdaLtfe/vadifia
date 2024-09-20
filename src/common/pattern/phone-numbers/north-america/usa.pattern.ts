/**
 * A regular expression that matches valid phone numbers in the USA.
 * @example
 * "+11234567890"
 * "1234567890"
 */
export const USA_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^\+?1?\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/
);

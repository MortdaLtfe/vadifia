/**
 * A regular expression that matches valid phone numbers in the Dominican Republic.
 * @example
 * "+18091234567"
 * "8091234567"
 */
export const DO_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+1809|809)?\s?\d{7}$/
);

/**
 * A regular expression that matches valid phone numbers in Brazil.
 * @example
 * "+5511123456789"
 * "11123456789"
 */
export const BR_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^\+55\d{2}(?:\d{8}|\d{9})$/
);

/**
 * A regular expression that matches valid phone numbers in Poland.
 * @example
 * "+48500100200"
 * "500100200"
 */
export const PO_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+48)?\s?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{3}$/
);

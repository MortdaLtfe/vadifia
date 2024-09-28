/**
 * A regular expression that matches valid phone numbers in Congo (DRC).
 * @example
 * "+243612345678"
 * "612345678"
 */
export const CD_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+243|0)?[89][0-9]{9}$/
);

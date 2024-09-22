/**
 * A regular expression that matches valid phone numbers in France.
 * @example
 * "+33770100200"
 * "070100200"
 */
export const FR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+33)?[0-9]{9}$/);

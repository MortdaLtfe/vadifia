/**
 * A regular expression that matches valid phone numbers in Italy.
 * @example
 * "+390123456789"
 * "0123456789"
 */
export const IT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+39)?\d{10}$/);

/**
 * A regular expression that matches valid phone numbers in Barbados.
 * @example
 * "+12462301234"
 * "246301234"
 */
export const BB_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1246)?\s?\d{7}$/);

/**
 * A regular expression that matches valid phone numbers in Grenada.
 * @example
 * "+1473 404 1234"
 * "473 404 1234"
 */
export const GD_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1473)?\d{7}$/);

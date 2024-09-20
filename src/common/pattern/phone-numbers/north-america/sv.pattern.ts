/**
 * A regular expression that matches valid phone numbers in El Salvador.
 * @example
 * "+50312345678"
 * "50312345678"
 */
export const SV_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+503)?\s?\d{8}$/);

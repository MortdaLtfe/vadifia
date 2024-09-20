/**
 * A regular expression that matches valid phone numbers in Honduras.
 * @example
 * "+50412345678"
 * "50412345678"
 */
export const HN_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+504)?\s?\d{8}$/);

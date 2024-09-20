/**
 * A regular expression that matches valid phone numbers in Colombia.
 * @example
 * "+573012345678"
 * "3012345678"
 */
export const CO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+57|0)[0-9]{10}$/);

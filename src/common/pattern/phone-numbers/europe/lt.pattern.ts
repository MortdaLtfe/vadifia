/**
 * A regular expression that matches valid phone numbers in Lithuania.
 * @example
 * "+37064000000"
 * "86000000"
 */
export const LT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+370)?\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in Belgium.
 * @example
 * "+32500100200"
 * "500100200"
 */
export const BE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+32)?\d{8}$/);

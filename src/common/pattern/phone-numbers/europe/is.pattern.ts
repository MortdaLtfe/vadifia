/**
 * A regular expression that matches valid phone numbers in Iceland.
 * @example
 * "+3541234567"
 * "1234567"
 */
export const IS_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+354)?\d{7}$/);

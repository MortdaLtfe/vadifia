/**
 * A regular expression that matches valid phone numbers in Estonia.
 * @example
 * "+3721234567"
 * "1234567"
 */
export const EE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+372)?\d{7}$/);

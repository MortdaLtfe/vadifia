/**
 * A regular expression that matches valid phone numbers in Seychelles.
 * @example
 * "+2482123456"
 * "2123456"
 */
export const SC_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+248|0)?2\d{6}$/);

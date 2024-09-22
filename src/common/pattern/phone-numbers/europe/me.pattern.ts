/**
 * A regular expression that matches valid phone numbers in Montenegro.
 * @example
 * "+382690123456"
 * "0690123456"
 */
export const ME_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+382|0)?[0-9]{8}$/);

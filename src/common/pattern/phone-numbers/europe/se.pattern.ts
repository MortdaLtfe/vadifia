/**
 * A regular expression that matches valid phone numbers in Sweden.
 * @example
 * "+46701234567"
 * "0701234567"
 */
export const SE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+46|0)?[0-9]{9}$/);

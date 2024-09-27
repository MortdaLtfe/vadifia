/**
 * A regular expression that matches valid phone numbers in Eritrea.
 * @example
 * "+2911234567"
 * "01234567"
 */
export const ER_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+291|0)?[178]\d{6}$/);

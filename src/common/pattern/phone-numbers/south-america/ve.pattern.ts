/**
 * A regular expression that matches valid phone numbers in Venezuela.
 * @example
 * "+582123456789"
 * "2123456789"
 */
export const VE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+58|0)?[1-9]\d{9}$/);

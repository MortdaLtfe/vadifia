/**
 * A regular expression that matches valid phone numbers in UAE.
 * @example
 * "+971123456789"
 * "0501234567"
 */
export const UAE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+971|0)5[0-9]{9}$/);

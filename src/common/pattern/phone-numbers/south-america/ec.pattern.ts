/**
 * A regular expression that matches valid phone numbers in Ecuador.
 * @example
 * "+593123456789"
 * "0991234567"
 */
export const EC_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+593|0)?[1-9]\d{9}$/);

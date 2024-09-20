/**
 * A regular expression that matches valid phone numbers in Argentina.
 * @example
 * "+541123456789"
 * "1123456789"
 */
export const AR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+54|0)?[1-9]\d{9}$/);

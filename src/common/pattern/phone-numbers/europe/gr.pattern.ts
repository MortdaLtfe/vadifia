/**
 * A regular expression that matches valid phone numbers in Greece.
 * @example
 * "+302107123456"
 * "2107123456"
 */
export const GR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+30)?2\d{9}$/);

/**
 * A regular expression that matches valid phone numbers in Portugal.
 * @example
 * "+351123456789"
 * "912345678"
 */
export const PT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+351)?\d{9}$/);

/**
 * A regular expression that matches valid phone numbers in Croatia.
 * @example
 * "+385123456789"
 * "0123456789"
 */
export const HR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+385)?\d{9}$/);

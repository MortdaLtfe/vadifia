/**
 * A regular expression that matches valid phone numbers in Georgia.
 * @example
 * "+995123456789"
 * "599123456789"
 */
export const GE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+995)?[0-9]{9}$/);

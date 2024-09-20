/**
 * A regular expression that matches valid phone numbers in Mexico.
 * @example
 * "+5215512345678"
 * "5512345678"
 */
export const MX_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+52)?\d{10}$/);

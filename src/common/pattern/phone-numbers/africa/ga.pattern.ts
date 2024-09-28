/**
 * A regular expression that matches valid phone numbers in GABON.
 * @example
 * "+2412010020"
 * "2010020"
 */
export const GA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+241)?[2-7]\d{6}$/);

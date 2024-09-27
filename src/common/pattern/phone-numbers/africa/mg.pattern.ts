/**
 * A regular expression that matches valid phone numbers in Madagascar.
 * @example
 * "+261331234567"
 * "331234567"
 */
export const MG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+261|0)?3\d{8}$/);

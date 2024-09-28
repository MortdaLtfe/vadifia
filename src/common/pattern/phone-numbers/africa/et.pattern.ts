/**
 * A regular expression that matches valid phone numbers in Ethiopia.
 * @example
 * "+251912345678"
 * "912345678"
 */
export const ET_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+251)?9\d{8}$/);

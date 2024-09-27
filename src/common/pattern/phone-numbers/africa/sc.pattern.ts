/**
 * A regular expression that matches valid phone numbers in Senegal.
 * @example
 * "+2212001020"
 * "2001020"
 */
export const SC_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+221|0)?2[0-9]{6}$/);

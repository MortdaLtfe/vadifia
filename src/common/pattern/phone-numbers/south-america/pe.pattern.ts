/**
 * A regular expression that matches valid phone numbers in Peru.
 * @example
 * "+519123456789"
 * "9123456789"
 */
export const PE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+51|0)?9\d{8}$/);

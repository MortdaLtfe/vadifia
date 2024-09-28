/**
 * A regular expression that matches valid phone numbers in Congo.
 * @example
 * "+242002345678"
 * "012345678"
 */
export const CG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+242)?0\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in Serbia.
 * @example
 * "+381123456789"
 * "0612345678"
 */
export const RS_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+381)?[0-9]{8,9}$/);

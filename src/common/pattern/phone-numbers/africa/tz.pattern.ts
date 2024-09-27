/**
 * A regular expression that matches valid phone numbers in Tanzania.
 * @example
 * "+255700100200"
 * "700100200"
 */
export const TZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+255)?[67]\d{8}$/);

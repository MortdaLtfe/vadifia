/**
 * A regular expression that matches valid phone numbers in GUINEA.
 * @example
 * "+224600100200"
 * "600100200"
 */
export const GN_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+224)?6\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in Slovenia.
 * @example
 * "+38650100200"
 * "050100200"
 */
export const SL_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+386)?\d{8}$/);

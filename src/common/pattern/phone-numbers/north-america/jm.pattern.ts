/**
 * A regular expression that matches valid phone numbers in Jamaica.
 * @example
 * "+18762567890"
 * "8762567890"
 */
export const JM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1876)?\s?\d{7}$/);

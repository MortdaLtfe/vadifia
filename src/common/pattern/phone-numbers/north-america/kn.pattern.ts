/**
 * A regular expression that matches valid phone numbers in Saint Kitts and Nevis.
 * @example
 * "+18696501234"
 * "8696501234"
 */
export const KN_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1869)?\s?\d{7}$/);

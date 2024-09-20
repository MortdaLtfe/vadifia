/**
 * A regular expression that matches valid phone numbers in Nicaragua.
 * @example
 * "+50512345678"
 * "50512345678"
 */
export const NI_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+505)?\s?\d{8}$/);

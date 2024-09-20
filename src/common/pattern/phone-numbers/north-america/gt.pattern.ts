/**
 * A regular expression that matches valid phone numbers in Guatemala.
 * @example
 * "+50212345678"
 * "50212345678"
 */
export const GT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+502)?\s?\d{8}$/);

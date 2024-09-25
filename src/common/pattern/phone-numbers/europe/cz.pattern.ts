/**
 * A regular expression that matches valid phone numbers in Czech Republic.
 * @example
 * "+420123456789"
 * "123456789"
 */
export const CZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+420)?\d{9}$/);

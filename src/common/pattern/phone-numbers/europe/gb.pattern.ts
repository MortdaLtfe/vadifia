/**
 * A regular expression that matches valid phone numbers in United Kingdom.
 * @example
 * "+447123456789"
 * "07123456789"
 */
export const GB_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+44|0)?\d{10}$/);

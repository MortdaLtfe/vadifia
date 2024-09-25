/**
 * A regular expression that matches valid phone numbers in United Kingdom.
 * @example
 * "+4471234567890"
 * "071234567890"
 */
export const GB_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+44|0)?\d{10}$/);

/**
 * A regular expression that matches valid phone numbers in Germany.
 * @example
 * "+4917621234567"
 * "017621234567"
 */
export const DE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+49)\d{10,11}$/);

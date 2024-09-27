/**
 * A regular expression that matches valid phone numbers in Mali.
 * @example
 * "+22360010020"
 * "60010020"
 */
export const ML_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+223)?[67]\d{7}$/);

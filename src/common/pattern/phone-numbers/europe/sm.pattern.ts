/**
 * A regular expression that matches valid phone numbers in San Marino.
 * @example
 * "+3786549990111"
 * "0349990111"
 */
export const SM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+378)?[36]\d{9}$/);

/**
 * A regular expression that matches valid phone numbers in San Marino.
 * @example
 * "+3780549990111"
 * "0549990111"
 */
export const SM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+378)?\d{6}$/);

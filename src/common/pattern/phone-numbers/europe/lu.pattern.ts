/**
 * A regular expression that matches valid phone numbers in Luxembourg.
 * @example
 * "+352691234567"
 * "691234567"
 */
export const LU_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+352)?\d{9}$/);

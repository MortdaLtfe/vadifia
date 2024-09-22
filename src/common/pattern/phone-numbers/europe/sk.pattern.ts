/**
 * A regular expression that matches valid phone numbers in Slovakia.
 * @example
 * "+421123456789"
 * "0901234567"
 */
export const SK_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+421)?[0-9]{9}$/);

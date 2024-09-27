/**
 * A regular expression that matches valid phone numbers in EGYPT.
 * @example
 * "+20101234567"
 * "1012345678"
 */
export const EG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+20)?1[0-9]{7,9}$/);

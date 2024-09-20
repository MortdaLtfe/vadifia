/**
 * A regular expression that matches valid phone numbers in EGYPT.
 * @example
 * "+201012345678"
 * "01012345678"
 */
export const EG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+201|01)[0-9]{10}$/);

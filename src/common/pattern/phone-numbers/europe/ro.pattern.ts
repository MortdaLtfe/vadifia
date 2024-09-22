/**
 * A regular expression that matches valid phone numbers in Romania.
 * @example
 * "+40701234567"
 * "0701234567"
 */
export const RO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+40|0)?[0-9]{9}$/);

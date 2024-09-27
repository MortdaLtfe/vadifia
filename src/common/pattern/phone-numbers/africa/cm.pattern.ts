/**
 * A regular expression that matches valid phone numbers in Cameroon.
 * @example
 * "+237912345678"
 * "912345678"
 */
export const CM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+237|0)?9[0-9]{8}$/);

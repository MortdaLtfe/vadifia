/**
 * A regular expression that matches valid phone numbers in Jordan.
 * @example
 * "+962791234567"
 * "0791234567"
 */
export const JO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+962|0)?7[0-9]{9}$/);

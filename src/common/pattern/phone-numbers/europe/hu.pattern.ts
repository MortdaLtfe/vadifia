/**
 * A regular expression that matches valid phone numbers in Hungary.
 * @example
 * "+36701234567"
 * "0701234567"
 */
export const HU_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+36)?[0-9]{9}$/);

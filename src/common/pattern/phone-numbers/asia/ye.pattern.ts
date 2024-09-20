/**
 * A regular expression that matches valid phone numbers in Yemen.
 * @example
 * "+967123456789"
 * "7123456789"
 */
export const YE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+967|0)7[0-9]{9}$/);

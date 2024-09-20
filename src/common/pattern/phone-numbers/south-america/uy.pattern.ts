/**
 * A regular expression that matches valid phone numbers in Uruguay.
 * @example
 * "+59812345678"
 * "099123456"
 */
export const UY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+598|0)?9[0-9]{7}$/);

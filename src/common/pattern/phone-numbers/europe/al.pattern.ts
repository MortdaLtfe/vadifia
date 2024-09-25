/**
 * A regular expression that matches valid phone numbers in Albania.
 * @example
 * "+35512345678"
 * "0678123456"
 */
export const AL_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+355|0)?[0-9]{8,9}$/);

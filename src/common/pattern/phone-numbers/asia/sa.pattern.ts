/**
 * A regular expression that matches valid phone numbers in SAUDI ARABIA.
 * @example
 * "+966123456789"
 * "0123456789"
 */
export const SA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+966|0)?[0-9]{9}$/);

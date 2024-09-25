/**
 * A regular expression that matches valid phone numbers in Switzerland.
 * @example
 * "+4123456789"
 * "04123456789"
 */
export const CH_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+41|0)?\d{9}$/);

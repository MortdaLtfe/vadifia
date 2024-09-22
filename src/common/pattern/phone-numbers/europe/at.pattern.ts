/**
 * A regular expression that matches valid phone numbers in Austria.
 * @example
 * "+430123456789"
 * "0123456789"
 */
export const AT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+43|0)[0-9]{8,12}$/);

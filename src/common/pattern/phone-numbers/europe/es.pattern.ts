/**
 * A regular expression that matches valid phone numbers in Spain.
 * @example
 * "+34601234567"
 * "601234567"
 */
export const ES_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+34)?\d{9}$/);

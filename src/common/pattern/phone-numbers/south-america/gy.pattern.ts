/**
 * A regular expression that matches valid phone numbers in Guyana.
 * @example
 * "+592123456"
 * "6123456"
 */
export const GY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+592|0)?[1-9]\d{6}$/);

/**
 * A regular expression that matches valid phone numbers in Suriname.
 * @example
 * "+597123456"
 * "7123456"
 */
export const SR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+597|0)?[1-9]\d{6}$/);

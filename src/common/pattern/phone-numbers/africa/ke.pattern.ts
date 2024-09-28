/**
 * A regular expression that matches valid phone numbers in Kenya.
 * @example
 * "+254701234567"
 * "701234567"
 */
export const KE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+254|0)?[17]\d{8}$/);

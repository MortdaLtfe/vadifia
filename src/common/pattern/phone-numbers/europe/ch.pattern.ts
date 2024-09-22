/**
 * A regular expression that matches valid phone numbers in Switzerland.
 * @example
 * "+41234567890"
 * "041234567890"
 */
export const CH_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+41|0)?\d{9}$/);

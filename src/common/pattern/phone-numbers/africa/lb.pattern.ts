/**
 * A regular expression that matches valid phone numbers in Lebanon.
 * @example
 * "+96170123456"
 * "070123456"
 */
export const LB_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+961|0)?[0-9]{8}$/);

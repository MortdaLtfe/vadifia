/**
 * A regular expression that matches valid phone numbers in Tunisia.
 * @example
 * "+2165001002"
 * "5001002"
 */
export const TN_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+216)?[2459]\d{7}$/);

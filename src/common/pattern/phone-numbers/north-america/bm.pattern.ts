/**
 * A regular expression that matches valid phone numbers in Bermuda.
 * @example
 * "+14412990123"
 * "4412990123"
 */
export const BM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1441|441)?\d{7}$/);

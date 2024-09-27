/**
 * A regular expression that matches valid phone numbers in Poland.
 * @example
 * "+48700100200"
 * "700100200"
 */
export const PO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+48)?7\d{8}$/);

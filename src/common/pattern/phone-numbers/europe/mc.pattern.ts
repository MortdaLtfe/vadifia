/**
 * A regular expression that matches valid phone numbers in Monaco.
 * @example
 * "+37762000001"
 * "62000001"
 */
export const MC_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+377)?[1-9]\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in Uganda.
 * @example
 * "+256700100200"
 * "700100200"
 */
export const UG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+256)?[7]\d{8}$/);

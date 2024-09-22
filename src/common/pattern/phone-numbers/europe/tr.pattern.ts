/**
 * A regular expression that matches valid phone numbers in Turkey.
 * @example
 * "+90530100200"
 * "530100200"
 */
export const TR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+90)?\d{10}$/);

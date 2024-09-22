/**
 * A regular expression that matches valid phone numbers in Norway.
 * @example
 * "+47900100200"
 * "900100200"
 */
export const NO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+47)?\d{8}$/);

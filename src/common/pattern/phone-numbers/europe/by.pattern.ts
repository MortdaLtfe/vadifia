/**
 * A regular expression that matches valid phone numbers in Belarus.
 * @example
 * "+375291234567"
 * "80291234567"
 */
export const BY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+375)?[0-9]{9}$/);

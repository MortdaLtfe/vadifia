/**
 * A regular expression that matches valid phone numbers in Andorra.
 * @example
 * "+376601234"
 * "601234"
 */
export const AD_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+376|0)?[0-9]{6}$/);

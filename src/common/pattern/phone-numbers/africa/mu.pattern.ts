/**
 * A regular expression that matches valid phone numbers in Mauritius.
 * @example
 * "+230500100200"
 * "500100200"
 */
export const MU_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+230)?5\d{7}$/);

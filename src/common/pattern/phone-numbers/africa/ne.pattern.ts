/**
 * A regular expression that matches valid phone numbers in Niger.
 * @example
 * "+227500100200"
 * "500100200"
 */
export const NE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+227)?9\d{7}$/);

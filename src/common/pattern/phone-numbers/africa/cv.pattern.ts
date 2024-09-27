/**
 * A regular expression that matches valid phone numbers in Cape Verde.
 * @example
 * "+238500100200"
 * "500100200"
 */
export const CV_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+238)?[59]\d{6}$/);

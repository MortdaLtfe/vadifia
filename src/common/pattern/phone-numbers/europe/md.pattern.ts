/**
 * A regular expression that matches valid phone numbers in Moldova.
 * @example
 * "+37360123456"
 * "60123456"
 */
export const MD_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+373)?\d{8}$/);

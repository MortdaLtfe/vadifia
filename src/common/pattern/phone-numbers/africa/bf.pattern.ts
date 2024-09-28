/**
 * A regular expression that matches valid phone numbers in Burkina Faso.
 * @example
 * "+22670010020"
 * "60010020"
 */
export const BF_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+226)?[67]\d{7}$/);

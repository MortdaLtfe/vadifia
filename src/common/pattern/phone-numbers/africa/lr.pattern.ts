/**
 * A regular expression that matches valid phone numbers in Liberia.
 * @example
 * "+23150010020"
 * "50010020"
 */
export const LR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+231)?[4-7]\d{6,7}$/);

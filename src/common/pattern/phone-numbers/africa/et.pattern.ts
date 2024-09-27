/**
 * A regular expression that matches valid phone numbers in Estonia.
 * @example
 * "+372950010020"
 * "950010020"
 */
export const ET_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+372)?9\d{8}$/);

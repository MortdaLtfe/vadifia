/**
 * A regular expression that matches valid phone numbers in Zambia.
 * @example
 * "+260750100200"
 * "750100200"
 */
export const ZM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+260)?[79]\d{8}$/);

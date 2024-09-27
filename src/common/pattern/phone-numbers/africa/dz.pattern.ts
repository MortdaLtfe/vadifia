/**
 * A regular expression that matches valid phone numbers in Algeria.
 * @example
 * "+213500100200"
 * "500100200"
 */
export const DZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+213)?[567]\d{8}$/);

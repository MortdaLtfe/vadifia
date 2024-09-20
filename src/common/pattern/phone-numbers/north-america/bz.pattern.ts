/**
 * A regular expression that matches valid phone numbers in Belize.
 * @example
 * "+5012345678"
 * "5012345678"
 */
export const BZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1501)?[\d]{7}$/);

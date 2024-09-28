/**
 * A regular expression that matches valid phone numbers in South Africa.
 * @example
 * "+27120000000"
 * "0120000000"
 */
export const ZA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+27|0)?[1-8]\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in LYBIA.
 * @example
 * "+218900100200"
 * "900100200"
 */
export const LY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+218)?9\d{8}$/);

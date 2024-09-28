/**
 * A regular expression that matches valid phone numbers in Angola.
 * @example
 * "+244912345678"
 * "0912345678"
 */
export const AO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+244|0)?9\d{8}$/);

/**
 * A regular expression that matches valid phone numbers in Oman.
 * @example
 * "+96812345678"
 * "91234567"
 */
export const OM_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+968|0)?[0-9]{8}$/);

/**
 * A regular expression that matches valid phone numbers in Bulgaria.
 * @example
 * "+35912345678"
 * "012345678"
 */
export const BG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+359|0)[0-9]{8}$/);

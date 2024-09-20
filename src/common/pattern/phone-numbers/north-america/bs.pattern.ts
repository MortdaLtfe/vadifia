/**
 * A regular expression that matches valid phone numbers in Bahamas.
 * @example
 * "+12422567890"
 * "2422567890"
 */
export const BS_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1242)?(\d{7})$/);

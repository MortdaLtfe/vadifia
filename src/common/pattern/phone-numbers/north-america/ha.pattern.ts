/**
 * A regular expression that matches valid phone numbers in Haiti.
 * @example
 * "+50928123456"
 * "028123456"
 */
export const HA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+509|0)?\d{8}$/);

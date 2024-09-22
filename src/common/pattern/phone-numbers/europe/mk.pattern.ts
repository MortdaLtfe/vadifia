/**
 * A regular expression that matches valid phone numbers in Macedonia.
 * @example
 * "+38970912345"
 * "070912345"
 */
export const MK_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+389)?\d{7,9}$/);

/**
 * A regular expression that matches valid phone numbers in Togo.
 * @example
 * "+22890234567"
 * "90234567"
 */
export const TG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+228)?9\d{7}$/);

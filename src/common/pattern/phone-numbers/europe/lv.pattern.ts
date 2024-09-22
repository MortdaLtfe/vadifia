/**
 * A regular expression that matches valid phone numbers in Latvia.
 * @example
 * "+37123456789"
 * "6123456789"
 */
export const LV_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+371|6)[0-9]{8}$/);

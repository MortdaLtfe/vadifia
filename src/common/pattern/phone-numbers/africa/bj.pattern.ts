/**
 * A regular expression that matches valid phone numbers in Benin.
 * @example
 * "+22950010020"
 * "50010020"
 */
export const BJ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+229)[469]?\d{7}$/);

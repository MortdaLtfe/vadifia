/**
 * A regular expression that matches valid phone numbers in Costa Rica.
 * @example
 * "+506601234567"
 * "506601234567"
 */
export const CR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1506)?\d{8}$/);

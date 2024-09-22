/**
 * A regular expression that matches valid phone numbers in Russia.
 * @example
 * "+79261234567"
 * "89261234567"
 */
export const RU_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+7|8)?[0-9]{10}$/);

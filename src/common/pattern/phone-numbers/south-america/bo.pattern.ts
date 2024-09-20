/**
 * A regular expression that matches valid phone numbers in Bolivia.
 * @example
 * "+59161234567"
 * "061234567"
 */
export const BO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+591|0)?\d{8}$/);

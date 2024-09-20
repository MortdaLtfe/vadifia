/**
 * A regular expression that matches valid phone numbers in Saint Lucia.
 * @example
 * "+17584301234"
 * "7584301234"
 */
export const LC_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1758)?\s?\d{7}$/);

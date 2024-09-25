/**
 * A regular expression that matches valid phone numbers in Norway.
 * @example
 * "+4790010020"
 * "90010020"
 */
export const NO_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+47)?\d{8}$/);

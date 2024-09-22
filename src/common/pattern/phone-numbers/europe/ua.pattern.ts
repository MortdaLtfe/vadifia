/**
 * A regular expression that matches valid phone numbers in Ukraine.
 * @example
 * "+38050100200"
 * "050100200"
 */
export const UA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+380)?\d{9}$/);

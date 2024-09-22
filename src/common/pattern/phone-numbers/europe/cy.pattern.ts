/**
 * A regular expression that matches valid phone numbers in Cyprus.
 * @example
 * "+357500100200"
 * "500100200"
 */
export const CY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+357)?\d{8}$/);

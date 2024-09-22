/**
 * A regular expression that matches valid phone numbers in Netherlands.
 * @example
 * "+31850100200"
 * "0850100200"
 */
export const NL_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+31)?\d{9}$/);

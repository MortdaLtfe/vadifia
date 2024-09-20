/**
 * A regular expression that matches valid phone numbers in Antigua and Barbuda.
 * @example
 * "+12684301234"
 * "2684301234"
 */
export const AG_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1268)?\s?\d{7}$/);

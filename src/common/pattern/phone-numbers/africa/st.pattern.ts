/**
 * A regular expression that matches valid phone numbers in Sao Tome and Principe.
 * @example
 * "+2399901002"
 * "9901002"
 */
export const ST_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+239)?(98|99)\d{5}$/);

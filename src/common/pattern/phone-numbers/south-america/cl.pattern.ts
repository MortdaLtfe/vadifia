/**
 * A regular expression that matches valid phone numbers in Chile.
 * @example
 * "+569123456789"
 * "9123456789"
 */
export const CL_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+56|0)?9[0-9]{8}$/);

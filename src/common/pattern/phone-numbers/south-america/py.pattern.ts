/**
 * A regular expression that matches valid phone numbers in Paraguay.
 * @example
 * "+595981123456"
 * "0981123456"
 */
export const PY_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+595|0)?9[0-9]{8}$/);

/**
 * A regular expression that matches valid phone numbers in Trinidad and Tobago.
 * @example
 * "+18681234567"
 * "8681234567"
 */
export const TT_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+1868)?\s?\d{7}$/);

/**
 * A regular expression that matches valid phone numbers in Finland.
 * @example
 * "+358501234567"
 * "0501234567"
 */
export const FI_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+358)?[0-9]{6,10}$/);

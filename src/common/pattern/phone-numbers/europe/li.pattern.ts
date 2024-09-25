/**
 * A regular expression that matches valid phone numbers in Liechtenstein.
 * @example
 * "+4237912345"
 * "07912345"
 */
export const LI_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+423|0)?7[0-9]{6}$/);

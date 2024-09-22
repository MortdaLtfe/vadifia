/**
 * A regular expression that matches valid phone numbers in Liechtenstein.
 * @example
 * "+42379123456"
 * "079123456"
 */
export const LI_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+423|0)?7[0-9]{8}$/);

/**
 * A regular expression that matches valid phone numbers in Mauritania.
 * @example
 * "+22250010020"
 * "50010020"
 */
export const MR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+222|0)?[0-9]{8}$/);

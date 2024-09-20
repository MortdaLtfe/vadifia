/**
 * A regular expression that matches valid phone numbers in QATAR.
 * @example
 * "+97450123456"
 * "50123456"
 */
export const QA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+974|0)?[0-9]{8}$/);

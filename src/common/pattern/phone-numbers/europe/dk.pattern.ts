/**
 * A regular expression that matches valid phone numbers in Denmark.
 * @example
 * "+4589123456"
 * "89123456"
 */
export const DK_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+45)?[0-9]{8}$/);

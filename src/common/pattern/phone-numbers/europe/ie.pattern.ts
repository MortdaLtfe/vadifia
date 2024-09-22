/**
 * A regular expression that matches valid phone numbers in Ireland.
 * @example
 * "+353860123456"
 * "0860123456"
 */
export const IE_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+353)?\d{9}$/);

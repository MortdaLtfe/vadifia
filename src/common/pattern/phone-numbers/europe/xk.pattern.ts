/**
 * A regular expression that matches valid phone numbers in Kosovo.
 * @example
 * "+38345012345"
 * "045012345"
 */
export const XK_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+383)?[0-9]{8}$/);

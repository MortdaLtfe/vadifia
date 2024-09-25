/**
 * A regular expression that matches valid phone numbers in Bosnia and Herzegovina.
 * @example
 * "+38761234567"
 * "061234567"
 */
export const BA_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+387|0)?[0-9]{8}$/);

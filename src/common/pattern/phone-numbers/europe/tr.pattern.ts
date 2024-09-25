/**
 * A regular expression that matches valid phone numbers in Turkey.
 * @example
 * "+905301002001"
 * "5301002001"
 */
export const TR_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+90)?5\d{9}$/);

/**
 * A regular expression that matches valid phone numbers in Swaziland.
 * @example
 * "+26878010020"
 * "77010020"
 */
export const SZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+268)?(76 | 77 | 78 | 79)\d{6}$/
);

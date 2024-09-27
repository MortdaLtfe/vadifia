/**
 * A regular expression that matches valid phone numbers in BURUNDI.
 * @example
 * "+25770123456"
 * "070123456"
 */
export const BI_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+257|0)?(7|29)[0-9]{7}$/
);

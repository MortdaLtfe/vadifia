/**
 * A regular expression that matches valid phone numbers in BOTSWANA.
 * @example
 * "+26771010020"
 * "71010020"
 */
export const BW_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+267)?(71 |72| 73 |74 |75 | 76 | 77 | 78 | 79)\d{6}$/
);

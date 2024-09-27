/**
 * A regular expression that matches valid phone numbers in Somalia.
 * @example
 * "+252610100200"
 * "610100200"
 */
export const SO_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+252|0)?(61|62|63|65|66|68|69|71|90)\d{7}$/
);

/**
 * A regular expression that matches valid phone numbers in Zimbabwe.
 * @example
 * "+26370010020"
 * "70010020"
 */
export const ZW_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+263|0)?7[1378]\d{7}$/
);

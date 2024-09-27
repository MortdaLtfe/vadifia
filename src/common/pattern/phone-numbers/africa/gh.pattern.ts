/**
 * A regular expression that matches valid phone numbers in Ghana.
 * @example
 * "+233500100200"
 * "0500100200"
 */
export const GH_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+233|0)?[25][0-9]{8}$/
);

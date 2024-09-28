/**
 * A regular expression that matches valid phone numbers in Morocco.
 * @example
 * "+212700100200"
 * "600100200"
 */
export const MA_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+212|0)?[67][0-9]{8}$/
);

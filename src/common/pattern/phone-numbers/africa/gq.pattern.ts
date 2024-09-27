/**
 * A regular expression that matches valid phone numbers in EQUATORIAL GUINEA.
 * @example
 * "+240222100200"
 * "551100200"
 */
export const GQ_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+240)?(222|551)\d{6}$/
);

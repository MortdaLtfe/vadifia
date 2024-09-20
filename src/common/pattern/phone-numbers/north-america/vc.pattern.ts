/**
 * A regular expression that matches valid phone numbers in Saint Vincent and the Grenadines.
 * @example
 * "+17844331234"
 * "7844331234"
 */
export const VC_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+1784|784)?\s?\d{7}$/
);

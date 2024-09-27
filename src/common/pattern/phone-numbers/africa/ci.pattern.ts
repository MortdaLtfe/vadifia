/**
 * A regular expression that matches valid phone numbers in Côte d'Ivoire.
 * @example
 * "+2255001002003"
 * "5001002003"
 */
export const CI_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+225)?[045678]\d{9}$/
);

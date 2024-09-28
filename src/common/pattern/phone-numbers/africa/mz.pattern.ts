/**
 * A regular expression that matches valid phone numbers in Mozambique.
 * @example
 * "+258800100200"
 * "800100200"
 */
export const MZ_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+258)?8\d{8}$/);

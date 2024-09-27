/**
 * A regular expression that matches valid phone numbers in Lesotho.
 * @example
 * "+26650010027"
 * "60010027"
 */
export const LS_PHONE_NUMBER_PATTERN: RegExp = RegExp(/^(\+266)?[56]\d{7}$/);

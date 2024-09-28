/**
 * A regular expression that matches valid phone numbers in Namibia.
 * @example
 * "+264602345678"
 * "602345678"
 */
export const NA_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+264)?(60|81|82|85)\d{7}$/
);

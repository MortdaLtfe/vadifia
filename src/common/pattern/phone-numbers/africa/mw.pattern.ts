/**
 * A regular expression that matches valid phone numbers in Malawi.
 * @example
 * "+265772345677"
 * "772345677"
 */
export const MW_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+265)?(77|88|99)\d{7}$/
);

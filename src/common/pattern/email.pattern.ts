/**
 * A regular expression that matches most common email addresses.
 *
 * @remarks
 * This regular expression does not match all valid email addresses, but
 * it does match most common ones.  It is intended to be used to validate
 * user input, such as when a user is asked to enter an email address.
 *
 * @example
 * const isValidEmail = (email: string): boolean => {
 *     return EMAIL_PATTERN.test(email);
 * };
 */
export const EMAIL_PATTERN: RegExp = RegExp(
  /^((?!.*[.\-]{2,})[_%+-\.a-zA-Z0-9]+[a-zA-Z0-9]+)@([a-zA-Z0-9]+[\.\-\_]?[\-\_a-zA-Z0-9\.]+)\.([a-zA-Z]{2,})$/
);

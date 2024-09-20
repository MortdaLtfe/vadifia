import { STRONG_PASSWORD_PATTERN } from "@common/pattern";

/**
 * Checks if a password is strong based on a predefined pattern.
 *
 * Guide to match the strong password regex:
 *
 * The password must contain:
 * - At least 2 uppercase letters (not necessarily consecutive)
 * - At least 4 lowercase letters
 * - At least 2 digits
 * - At least 1 special character
 * - A minimum length of 12 characters
 * - A maximum length of 64 characters
 *
 * example of a strong password: @example
 * "AAbAsscd1234!@#$"
 *
 * @param {string} password - The password to check.
 * @return {boolean} True if the password is strong.
 */
export function isStrongPassword(password: string): boolean;
/**
 * Checks if a password is strong based on a predefined pattern.
 *
 * Guide to match the strong password regex:
 *
 * The password must contain:
 * - At least 2 uppercase letters (not necessarily consecutive)
 * - At least 4 lowercase letters
 * - At least 2 digits
 * - At least 1 special character
 * - A minimum length of 12 characters
 *
 * example of a strong password: @example
 * "AAbAsscd1234!@#$"
 *
 * @param {string} password - The password to check.
 * @param {string} [message] - An optional custom error message to return if the password is not strong.
 * @return {boolean|string} True if the password is strong, or the custom error message if provided and the password is not strong.
 */

export function isStrongPassword(
  password: string,
  message?: string
): string | string;

export function isStrongPassword(
  password: string,
  message?: string
): boolean | string {
  if (message) {
    return STRONG_PASSWORD_PATTERN.test(password.trim()) ? true : message;
  }
  return STRONG_PASSWORD_PATTERN.test(password.trim());
}

import { EMAIL_PATTERN } from "@common/pattern";

/**
 * Checks if the given email is valid.
 *
 * @param {string} email - The email to check.
 * @return {boolean} - Returns true if the email is valid
 */
export function isEmail(email: string): boolean;
/**
 * Checks if the given email is valid.
 *
 * @param {string} email - The email to check.
 * @param {string} [message] - An optional message to return if the email is not valid. If not provided, returns a boolean value.
 * @return {boolean | string} - Returns true if the email is valid, otherwise returns the provided message or false if no message is provided.
 */

export function isEmail(email: string, message: string): string | string;
export function isEmail(email: string, message?: string): boolean | string {
  if (message) {
    return EMAIL_PATTERN.test(email.trim().toLowerCase()) ? true : message;
  }
  return EMAIL_PATTERN.test(email.trim().toLowerCase());
}

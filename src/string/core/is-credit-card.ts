import { CREDIT_CARD_PATTERN } from "@common/pattern";

/**
 * Checks if the provided value matches the credit card pattern.
 *
 * @param {any} value - The value to check against the credit card pattern.
 * @return {boolean} True if the value matches the pattern.
 */
export function isCreditCard(value: string): boolean;
/**
 * Checks if the provided value matches the credit card pattern.
 *
 * @param {any} value - The value to check against the credit card pattern.
 * @param {string} [message] - An optional error message to return if the value does not match the pattern.
 * @return {boolean|string} True if the value matches the pattern, or the provided error message if it does not.
 */
export function isCreditCard(value: any, message: string): boolean | string;
export function isCreditCard(value: any, message?: string): boolean | string {
  if (message) {
    return CREDIT_CARD_PATTERN.test(value) ? true : message;
  }
  return CREDIT_CARD_PATTERN.test(value);
}

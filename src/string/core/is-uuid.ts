import { UUID_PATTERN } from "@common/pattern";

/**
 * Checks if the given value is a valid UUID.
 *
 * @param {any} value - The value to be checked.
 * @return {boolean|string} True if the value is a valid UUID.
 */
export function isUUid(value: any): boolean;
/**
 * Checks if the given value is a valid UUID.
 *
 * @param {any} value - The value to be checked.
 * @param {string} [message] - An optional error message to be returned if the value is not a valid UUID.
 * @return {boolean|string} True if the value is a valid UUID, otherwise the provided error message or false.
 */
export function isUUid(value: any, message?: string): boolean;

export function isUUid(value: any, message?: string): boolean | string {
  if (message) {
    return UUID_PATTERN.test(value) ? true : message;
  }

  return UUID_PATTERN.test(value);
}

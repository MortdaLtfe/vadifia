/**
 * Checks if the length of a given string is not greater than a specified maximum value.
 *
 * @param {string} value - The string to check.
 * @param {number} max - The maximum length.
 * @return {boolean} True if the string length is not greater than the maximum
 */
export function max(value: string, max: number): boolean;
/**
 * Checks if the length of a given string is not greater than a specified maximum value.
 *
 * @param {string} value - The string to check.
 * @param {number} max - The maximum length.
 * @param {string} [message] - An optional error message to return if the string length is greater than the maximum.
 * @return {boolean|string} True if the string length is not greater than the maximum, or the error message if provided.
 */
export function max(
  value: string,
  max: number,
  message?: string
): string | string;

export function max(
  value: string,
  max: number,
  message?: string
): boolean | string {
  if (message) {
    return value.length < max ? true : message;
  }
  return value.length < max;
}

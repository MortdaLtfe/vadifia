/**
 * Checks if the length of a given string is less than a specified minimum value.
 *
 * @param {string} value - The string to check.
 * @param {number} min - The minimum length.
 * @return {boolean} True if the string length is less than the minimum
 */
export function min(value: string, min: number): boolean;
/**
 * Checks if the length of a given string is less than a specified minimum value.
 *
 * @param {string} value - The string to check.
 * @param {number} min - The minimum length.
 * @param {string} [message] - An optional error message to return if the string length is not less than the minimum.
 * @return {boolean|string} True if the string length is less than the minimum, or the error message if provided.
 */
export function min(
  value: string,
  min: number,
  message?: string
): string | string;

export function min(
  value: string,
  min: number,
  message?: string
): boolean | string {
  if (message) {
    return value.length < min ? true : message;
  }
  return value.length < min;
}

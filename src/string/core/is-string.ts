/**
 * Checks if the given value is a string.
 *
 * @param {any} value - The value to check.
 * @return {boolean} True if the value is a string.
 */
export function isString(value: any): boolean;
/**
 * Checks if the given value is a string.
 *
 * @param {any} value - The value to check.
 * @param {string} [message] - An optional error message to return if the value is not a string.
 * @return {boolean|string} True if the value is a string, or the provided error message if it is not.
 */
export function isString(value: any, message?: string): boolean | string;
export function isString(value: any, message?: string): boolean | string {
  if (message) {
    return typeof value === "string" ? true : message;
  }
  return typeof value === "string";
}

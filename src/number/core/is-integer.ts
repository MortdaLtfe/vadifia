/**
 * Checks if the given number is an integer.
 *
 * @param {number} value - The number to check.
 * @return {boolean} True if the number is an integer, false otherwise.
 */
export function isInteger(value: any): boolean;
export function isInteger(value: any, message: string): string;
export function isInteger(value: any, message?: string): boolean | string {
  if (message) {
    return value === parseInt(String(value), 10) ? true : message;
  }
  return value === parseInt(String(value), 10);
}

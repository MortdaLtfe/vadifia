import { MONGO_ID_PATTERN } from "@common/pattern";

/**
 * Checks if a given string is a valid MongoDB ID.
 *
 * @param {string} id - The string to be checked.
 * @return {boolean} - Returns `true` if the ID is valid
 */
export function isMongoId(id: string): boolean;
/**
 * Checks if a given string is a valid MongoDB ID.
 *
 * @param {string} id - The string to be checked.
 * @param {string} [message] - An optional error message to return if the ID is not valid.
 * @return {string | boolean} - Returns `true` if the ID is valid, otherwise returns the provided error message.
 */
export function isMongoId(id: string, message: string): string | boolean;
export function isMongoId(id: string, message?: string): string | boolean {
  if (message) {
    return MONGO_ID_PATTERN.test(id) ? true : message;
  }
  return MONGO_ID_PATTERN.test(id);
}

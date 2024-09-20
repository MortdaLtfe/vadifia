import { URL_PATTERN } from "@common/pattern";

/**
 * Checks if a given string is a valid URL.
 *
 * @param {string} url - the URL to be validated
 * @return {boolean} true if the URL is valid
 */
export function isUrl(url: string): boolean;
/**
 * Checks if a given string is a valid URL.
 *
 * @param {string} url - the URL to be validated
 * @param {string} [message] - an optional error message to return if the URL is invalid
 * @return {boolean|string} true if the URL is valid, or the provided error message if it's not
 */
export function isUrl(url: string, message: string): string | boolean;
export function isUrl(url: string, message?: string): boolean | string {
  if (message) {
    return URL_PATTERN.test(url.trim().toLowerCase()) ? true : message;
  }
  return URL_PATTERN.test(url.trim().toLowerCase());
}

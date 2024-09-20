import { phoneNumbers } from "@common/pattern";

/**
 * Checks if a given phone number is valid based on the provided code.
 *
 * @param {string} phoneNumber - The phone number to be validated.
 * @param {string} code - The code associated with the phone number.
 * @return {boolean | string | undefined} Returns true if the phone number is valid, the  or undefined if the code is not recognized.
 */

export function isPhoneNumber(
  phoneNumber: string,
  code: string
): boolean | undefined;
/**
 * Checks if a given phone number is valid based on the provided code.
 *
 * @param {string} phoneNumber - The phone number to be validated.
 * @param {string} code - The code associated with the phone number.
 * @param {string} [message] - Optional message to be returned if the phone number is invalid.
 * @return {boolean | string | undefined} Returns true if the phone number is valid, the provided message if the phone number is invalid, or undefined if the code is not recognized.
 */
export function isPhoneNumber(
  phoneNumber: string,
  code: string,
  message: string
): boolean | string | undefined;
export function isPhoneNumber(
  phoneNumber: string,
  code: string,
  message?: string
): boolean | string | undefined {
  phoneNumber = phoneNumber.trim().replace(/[\s\(\)\-\.\_]/g, "");
  if (!phoneNumbers.get(code)) return undefined;

  if (message) {
    return phoneNumbers.get(code).test(phoneNumber) ? true : message;
  }

  return phoneNumbers.get(code).test(phoneNumber) ? true : false;
}

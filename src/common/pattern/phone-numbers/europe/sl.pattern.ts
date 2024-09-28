/**
 * A regular expression that matches valid phone numbers in Sierra Leone.
 * @example
 * "+23255123456"
 * "21123456"
 */
export const SL_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+232)?(21|25|30|33|34|40|44|50|55|76|77|78|79|88)\d{6}$/
);

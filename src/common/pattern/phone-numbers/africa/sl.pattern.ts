/**
 * A regular expression that matches valid phone numbers in Sierra Leone.
 * @example
 * "+23240010020"
 * "040010020"
 */
export const SI_PHONE_NUMBER_PATTERN: RegExp = RegExp(
  /^(\+232|0)?(21|25|30|33|34|40|44|50|55|76|77|78|79|88)\d{6}$/
);

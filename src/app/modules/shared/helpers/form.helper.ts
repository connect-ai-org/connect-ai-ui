import { FormControl } from "@angular/forms";

export enum FORM_CONTROL_ERROR {
  REQUIRED = 'required',
  EMAIL = 'email',
}

export const getErrorMessage = (control: FormControl) => {
  if (control.hasError(FORM_CONTROL_ERROR.REQUIRED)) {
    return 'This field is required';
  }
  if (control.hasError(FORM_CONTROL_ERROR.EMAIL)) {
    return 'Invalid email'
  }
  return '';
}
import { FormControl, FormGroup } from "@angular/forms";

export enum FORM_CONTROL_ERROR {
  REQUIRED = 'required',
  EMAIL = 'email',
}

export const getErrorMessageOfFormControlName = (form: FormGroup, formControlName: string) => {
  const control: FormControl = form.get(formControlName) as FormControl;
  if (control) {
    return getErrorMessageOfFormControl(control);
  }
  return '';
}

export const getErrorMessageOfFormControl = (control: FormControl) => {
  if (control.hasError(FORM_CONTROL_ERROR.REQUIRED)) {
    return 'This field is required';
  }
  if (control.hasError(FORM_CONTROL_ERROR.EMAIL)) {
    return 'Invalid email'
  }
  return '';
}
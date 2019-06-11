import { AbstractControl } from '@angular/forms';


export function ValidateNumbers(control: AbstractControl) {
  if (isNaN(control.value)) {
    return { validNum: true };
  }
  return null;
}

export function DateValidators(control: AbstractControl) {

  if (control.value) {
    const inputDate = new Date(control.value);
    const today = new Date();
    if (inputDate > today) {
      return { invalidDate: true };
    }
  }
  return null;
}

export function stringValidators(control: AbstractControl) {
  if (control.value) {
    const strArr = control.value.split(',');
    for (let i = 0; i < strArr.length; i++) {
      if (!(strArr[i].length >= 5 && strArr[i].length <= 16 && strArr.length <= 10)) {
        return { invalidStr: true };
      }
    }
  }
  return null;
}

import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:boolean }|null {
    const pass = control.get('new');
    const confirmPas = control.get('confirm');
    return pass && confirmPas && (pass.value!=confirmPas.value) ? {'misMatch':true} : null; 
}
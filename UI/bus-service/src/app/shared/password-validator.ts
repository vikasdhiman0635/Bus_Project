import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } |null
{
    const password = control.get('newpassword');
    const cpassword =control.get('confirmpassword');

    if(password.pristine || cpassword.pristine)
    {
        return null;
    }

    return password && cpassword && password.value!=cpassword.value ? 
    {
        'mismatch' : true
    }: null;
}
import { AbstractControl } from "@angular/forms";

export function numberValidator(control: AbstractControl): { [key: string]: boolean } |null
{
    const prize = control.get('travelbusprize');
    if(prize.value>=1)
    {
        alert("This is not a right prize");
        return prize && prize && prize.value>=1 ? 
        {
            'mismatch' : true
        }: null;
    }
    if(prize.value<=1)
    {
        // alert("This is a right prize");
        return prize && prize && prize.value<=1 ? 
        {
            'mismatch' : false
        }: null;
    }
}
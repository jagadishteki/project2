import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatch: ValidatorFn = (control:AbstractControl) : ValidationErrors | null=>{
    console.log("working");
    if(control.get('password')?.value && control.get('confirmpassword')?.value){
        if(control.get('password')?.value!==control.get('confirmpassword')?.value){
            console.log(control.get('password')?.value, control.get('confirmpassword')?.value)
            return {"passwordMatchError" : true}
        }
    }
    return null;
}
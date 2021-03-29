import { Observable } from "rxjs";

export interface CheckBackSecurity {
    canDeactivate: () => boolean | Observable<boolean>
}

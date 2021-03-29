import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckBackSecurity } from '../Interface/check-back-security';

@Injectable({
  providedIn: 'root'
})
export class BacksecurityGuard implements CanDeactivate<CheckBackSecurity> 
{
  canDeactivate(
    component: CheckBackSecurity,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      // if(component.canDeactivate())
      // {
      //   return true;
      // }
      // else{
      //   return confirm("you want to cancel your order?");
      // }
      return true;
  }
  
}

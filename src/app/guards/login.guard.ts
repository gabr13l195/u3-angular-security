import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  let acceso= "false"

  if (acceso == "false"){
    return false
  } else {
    return true;
  }

};

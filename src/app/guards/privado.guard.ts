import { ReturnStatement } from '@angular/compiler';
import { CanActivateFn, CanMatch, CanMatchFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('login')== 'false'){
    return true
  } else {
    return false;
  }
};



export const productosGuard: CanMatchFn = (route, state) => {

  let acceso = true

  if(sessionStorage.getItem('producto')=='true  '){
    acceso = false
  }

  return acceso
};
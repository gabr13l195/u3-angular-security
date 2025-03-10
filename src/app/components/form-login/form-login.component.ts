import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  email: any;
  password: any;

  servicio = inject (LoginService)

  login(formulario: any){
    //console.log(formulario.value);
    this.servicio.postLogin(formulario.value).subscribe(acceso =>{
      console.log(acceso);
      let token = acceso.accessToken
      if(token != ""){
        localStorage.setItem("login", "true")
        window.location.href="privado"
      }
    })
  }

}
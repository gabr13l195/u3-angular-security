import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  email: any;
  password: any;

  servicios = inject(LoginService)
  token = ""

  rol(formulario: NgForm) {
    this.servicios.postLogin(formulario.value).subscribe(acceso => {
      console.log(acceso);
      this.token = acceso.accesToken
      if (this.token != "") {
        sessionStorage.setItem('producto', 'true')
        window.location.href='productos'
      }
    })


  }

}

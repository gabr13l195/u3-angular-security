import { Component, inject } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: string = "";
  password: string = "";

  servicio = inject(RegistroService);

  register(formulario: any) {
    if (!this.email || !this.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    this.servicio.postRegister({ email: this.email, password: this.password }).subscribe(
      (response) => {
        console.log("Registro exitoso:", response);
        if (response.accessToken) {
          localStorage.setItem("login", "true");
          window.location.href = "/privado"; // Redirigir tras el registro
        }
      },
      (error) => {
        console.error("Error en el registro:", error);
        alert("Error al registrarse, intenta con otro correo.");
      }
    );
  }
}


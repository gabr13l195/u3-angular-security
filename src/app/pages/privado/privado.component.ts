import { Component } from '@angular/core';

@Component({
  selector: 'app-privado',
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {

  logout(){
    localStorage.setItem('login', 'false')
    window.location.href="login"
  }

}

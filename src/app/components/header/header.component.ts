import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor (private router : Router) {}

  sendHome(event : Event) {
    event.preventDefault();
    this.router.navigate(['']);
  }

  SendUs(event : Event) {
    event.preventDefault();
    this.router.navigate(['/nosotros']);
  }

  sendServicios(event : Event) {
    event.preventDefault();
    this.router.navigate(['/servicios']);
  }

  sendProgramers(event : Event) {
    event.preventDefault();
    this.router.navigate(['/programadores']);
  }

  sendContact(event : Event) {
    event.preventDefault();
    this.router.navigate(['/contactar']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('.header-menu');
    if (menu) {
      if (this.isMenuOpen) {
        menu.classList.add('open');
      } else {
        menu.classList.remove('open');
      }
    }
  }  
}

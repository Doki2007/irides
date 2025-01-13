import { Component } from '@angular/core';

@Component({
  //TODO: CAMBIAR NOMBRE DE SELECTOR
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  scrollToSection(sectionString: string) {
    const section = document.querySelector(`#${sectionString}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}

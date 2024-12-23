import { Component } from '@angular/core';
import { SocialComponent } from "../social/social.component";

@Component({
  //TODO: CAMBIAR NOMBRE DE SELECTOR
  selector: 'app-footer',
  standalone: true,
  imports: [SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

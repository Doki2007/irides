import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { QuinuaComponent } from "./components/quinua/quinua.component";
import { CafeComponent } from "./components/cafe/cafe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    NavbarComponent,
    FooterComponent,
    QuinuaComponent,
    CafeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irides';
}

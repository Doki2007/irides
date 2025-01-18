import { Component } from '@angular/core';
import { FooterComponent } from "./shared/footer/footer.component";
import { QuinoaComponent } from "./components/quinoa/quinoa.component";
import { CoffeComponent } from "./components/coffee/coffee.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HeaderComponent } from "./components/header/header.component";
import { SocialComponent } from "./shared/social/social.component";
import { GalleryComponent } from "./components/gallery/gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutUsComponent,
    CoffeComponent,
    CoffeComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    QuinoaComponent,
    SocialComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irides';
}

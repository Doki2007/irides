import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'component-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {


  public quinoa: string[] = [
    'assets/images/gallery/quinoa/logo-iii.jpg',
    'assets/images/gallery/quinoa/logo-ii.jpg',
    'assets/images/gallery/quinoa/paisaje.jpg',
    'assets/images/gallery/quinoa/cosecha-quinoa.jpg',
    'assets/images/gallery/quinoa/paisaje-3.jpg',
    'assets/images/gallery/quinoa/titicaca.jpg',
    'assets/images/gallery/quinoa/paisaje-2.jpg',
  ]

  public coffee: string[] = [
    'assets/images/gallery/coffee/1.jpg',
    'assets/images/gallery/coffee/2.jpg',
    'assets/images/gallery/coffee/3.jpg',
    'assets/images/gallery/coffee/4.jpg',
    'assets/images/gallery/coffee/5.jpg',
    'assets/images/gallery/coffee/6.jpg',
    'assets/images/gallery/coffee/7.jpg',
    'assets/images/gallery/coffee/8.jpg',
    'assets/images/gallery/coffee/9.jpg',
    'assets/images/gallery/coffee/10.jpg',
    'assets/images/gallery/coffee/11.jpg',
    'assets/images/gallery/coffee/12.jpg',
    'assets/images/gallery/coffee/13.jpg',
    'assets/images/gallery/coffee/14.jpg',
    'assets/images/gallery/coffee/15.jpg',
    'assets/images/gallery/coffee/16.jpg',
    'assets/images/gallery/coffee/19.jpg',
    'assets/images/gallery/coffee/20.jpg',
    'assets/images/gallery/coffee/21.jpg',
    'assets/images/gallery/coffee/23.jpg',
    'assets/images/gallery/coffee/22.jpg',
  ]

}

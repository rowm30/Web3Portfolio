import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    buttonClick1 = ()=>{
      Swal.fire({
        title: 'Sabke paas Dark Mode nahi hota Laxman!',
        text: 'A real developer never uses light mode.',
        imageUrl: './../assets/darkmode.jpg',
        imageWidth: 500,
        imageHeight: 700,
        imageAlt: 'Custom image',
      })
    }
}

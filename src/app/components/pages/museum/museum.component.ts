import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-museum',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './museum.component.html',
  styleUrl: './museum.component.scss'
})
export class MuseumComponent {

}

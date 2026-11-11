import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AdydNavbar} from '../../.yalc/components/projects/components/src/lib/adyd-navbar/adyd-navbar';

@Component({
  imports: [RouterOutlet, AdydNavbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


}

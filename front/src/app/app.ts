import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdydCarousel} from '../../.yalc/components/projects/components/src/lib/adyd-carousel/adyd-carousel';
import {CardItem} from '../../.yalc/components/projects/components/src/lib/model/card-item';
import {CarouselInner} from './carouselinner/carouselinner';
import {AdydNavbar} from '../../.yalc/components/projects/components/src/lib/adyd-navbar/adyd-navbar';

@Component({
  imports: [RouterOutlet, CarouselInner, AdydNavbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


}

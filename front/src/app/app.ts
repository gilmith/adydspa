import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdydCarousel} from '../../.yalc/components/projects/components/src/lib/adyd-carousel/adyd-carousel';
import {CardItem} from '../../.yalc/components/projects/components/src/lib/model/card-item';
import {CarouselInner} from './carouselinner/carouselinner';

@Component({
  imports: [RouterOutlet, CarouselInner],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


}

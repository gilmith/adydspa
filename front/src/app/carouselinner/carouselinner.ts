import {Component, inject, OnInit, signal} from '@angular/core';
import { AdydCarousel } from '../../../.yalc/components/projects/components/src/lib/adyd-carousel/adyd-carousel';
import {CampaignControllerService, CampaignDto, PaginatedDto} from 'adydspa-api-client';
import { HttpErrorResponse } from '@angular/common/http';
import {CardItem} from '../../../.yalc/components/projects/components/src/lib/model/card-item';



@Component({
  imports: [
    AdydCarousel
  ],
  selector: 'carouselInner',
  styleUrl: './carouselinner.css',
  templateUrl: './carouselinner.html',
})
export class CarouselInner implements OnInit {

  private readonly campaignApi =inject(CampaignControllerService);
  protected items = signal<CardItem[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.campaignApi.getAllCampaign(0, 1000).subscribe({
      next: (value: PaginatedDto) => this.buildCardItems(value),
      error: (error: HttpErrorResponse) => console.log(error.message)
    });
  }

  buildCardItems(value: PaginatedDto) {
      this.items.set(value.content
        .filter((item): item is CampaignDto => 'fileStoreUrl' in item)
        .map(c => ({
        id: c.id,
        url: c.fileStoreUrl || '',
        title: c.name,
        description: c.name
      })));
  }

}

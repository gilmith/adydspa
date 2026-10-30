import {Component, ElementRef, inject, signal, viewChild, computed, output} from '@angular/core';
import {CampaignControllerService, CampaignDto, PaginatedDto} from 'adydspa-api-client';
import { HttpErrorResponse } from '@angular/common/http';
import {AdydCarousel} from '../../../.yalc/components/projects/components/src/lib/adyd-carousel/adyd-carousel';
import {
  AdydCardContentCampaign
} from '../../../.yalc/components/projects/components/src/lib/adyd-card-content-campaign/adyd-card-content-campaign';
import {AdydCard} from '../../../.yalc/components/projects/components/src/lib/adyd-card/adyd-card';
import {CardItem} from '../../../.yalc/components/projects/components/src/lib/model/card-item';


@Component({
  imports: [
    AdydCarousel,
    AdydCardContentCampaign,
    AdydCard
  ],
  selector: 'carouselInner',
  styleUrl: './carouselinner.css',
  templateUrl: './carouselinner.html',
})
export class CarouselInner {

  private readonly campaignApi = inject(CampaignControllerService);
  protected items = signal<CardItem[]>([]);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  protected readonly selected = signal<CardItem | null>(null);

  /** Output que emite el item seleccionado completo (equivalente a cardSelected del original). */
  protected cardSelected = output<CardItem>();

  protected open(card: CardItem): void {
    this.selected.set(card);
    const dialog = this.dialog().nativeElement;
    if (!dialog.open) dialog.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  /** AdydCard solo devuelve el id, así que aquí se recupera el item completo. */
  protected handleSelect(id: number): void {
    const card = this.items().find(c => c.id === id);
    if (!card) return;
    this.cardSelected.emit(card);
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

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
        description: c.description ?? c.name
      })));
  }

}

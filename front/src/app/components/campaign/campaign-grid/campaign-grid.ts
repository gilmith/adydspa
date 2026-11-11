import {Component, computed, ElementRef, inject, input, output, signal, viewChild} from '@angular/core';
import {CampaignDto, PaginatedDto} from 'adydspa-api-client';
import {Router} from '@angular/router';
import {AdydCard} from '../../../../../.yalc/components/projects/components/src/lib/adyd-card/adyd-card';
import {AdydCardContentCampaign2} from '../adyd-card-content-campaign-2/adyd-card-content-campaign-2';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';

@Component({
  imports: [
    AdydCard,
    AdydCardContentCampaign2
  ],
  selector: 'adyd-campaign-grid',
  styleUrl: './campaign-grid.css',
  templateUrl: './campaign-grid.html',
})
export class CampaignGrid {
  readonly campaigns = input<PaginatedDto | undefined>(undefined);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  protected readonly selected = signal<CardItem | null>(null);
  protected cardSelected = output<CardItem>();
  readonly cardItems = computed(() => {
    const items = (this.campaigns()?.content ?? [])
      .filter((item): item is CampaignDto => 'fileStoreUrl' in item)
      .map(campaign => ({
        id: campaign.id,
        url: campaign.fileStoreUrl || '',
        title: campaign.name,
        description: campaign.description ?? campaign.name
      }));

    const rows: CardItem[][] = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    return rows;
  });

  private router = inject(Router);

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

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
    const card = this.selected();
    if (!card) return;
    this.cardSelected.emit(card);
  }

}

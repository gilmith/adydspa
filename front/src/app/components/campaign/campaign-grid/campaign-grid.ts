import {Component, computed, ElementRef, input, signal, viewChild} from '@angular/core';
import {AdydCard} from '../../../../../.yalc/components/projects/components/src/lib/adyd-card/adyd-card';
import {AdydCardContentCampaign2} from '../adyd-card-content-campaign-2/adyd-card-content-campaign-2';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';
import {CampaignPage} from '../../../service/campaign/campaign.model';

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
  protected readonly campaigns = input<CampaignPage | undefined>(undefined);
  protected readonly selected = signal<CardItem | null>(null);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly cardItems = computed(() => {
    const items: CardItem[] = (this.campaigns()?.content ?? []).map(campaign => ({
      id: campaign.id,
      url: campaign.imageUrl ?? '',
      title: campaign.name,
      description: campaign.description ?? campaign.name
    }));

    const rows: CardItem[][] = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    return rows;
  });


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

}

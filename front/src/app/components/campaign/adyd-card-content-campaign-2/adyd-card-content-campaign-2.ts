import {Component, computed, inject, input} from '@angular/core';
import {
  AdminDirective
} from '../../../../../.yalc/components/projects/components/src/lib/directives/admin-directive';
import {
  PlayerDirective
} from '../../../../../.yalc/components/projects/components/src/lib/directives/player-directive';
import {Router} from '@angular/router';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';
import {DeleteCampaignInteractor} from '../../../service/campaign/interactors/delete-campaign.interactor';

@Component({
  imports: [
    AdminDirective,
    PlayerDirective
  ],
  selector: 'adyd-card-content-campaign-2',
  styleUrl: './adyd-card-content-campaign-2.css',
  templateUrl: './adyd-card-content-campaign-2.html',
})
export class AdydCardContentCampaign2 {

  public id = input.required<number>();
  public showButtons = input.required<boolean>();
  public readonly cardItemInput = input.required<CardItem>();
  private readonly deleteCampaign = inject(DeleteCampaignInteractor);
  private readonly router = inject(Router);
  public readonly description = computed(() => this.cardItemInput().description);
  public readonly imageUrl = computed(() => this.cardItemInput().url);
  public readonly title = computed(() => this.cardItemInput().title);

  protected edit(id: number): void {
    void this.router.navigate(['/campaign', id]);
  }

  protected onDelete(id: number): void {
    this.deleteCampaign.execute(id).subscribe({
      error: error => console.error('No se pudo eliminar la campaña', error)
    });
  }

  protected onSelect() {
    console.log('onSelect');
  }
}

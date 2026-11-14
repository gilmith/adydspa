import {Component, computed, inject, input} from '@angular/core';
import {
  AdminDirective
} from '../../../../../.yalc/components/projects/components/src/lib/directives/admin-directive';
import {
  PlayerDirective
} from '../../../../../.yalc/components/projects/components/src/lib/directives/player-directive';
import {
  ApiApplicationsEnum
} from '../../../../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';
import {
  API_APPLICATIONS
} from '../../../../../.yalc/components/projects/components/src/lib/services/api-applications';
import {Router} from '@angular/router';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';

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
  private readonly apiApplications = inject(API_APPLICATIONS);
  private readonly route = inject(Router);
  public readonly description = computed(() => this.cardItemInput().description);
  public readonly imageUrl = computed(() => this.cardItemInput().url);
  public readonly title = computed(() => this.cardItemInput().title);

  protected edit(id: number) {
    this.route.navigate([`/campaign/${id}`], {state: {payLoadData: { cardData: this.cardItemInput()}}})
      .then(() => {console.log('OK')})
  }

  protected onDelete(number: number) {
    console.log('onDelete', number);
    const record = {
      "campaignId": number,
    }
    this.apiApplications
        .executeService(ApiApplicationsEnum.CAMPAIGN, record, 'deleteCampaignId')
        .subscribe({next: (response) => {},
          error: error => {
            console.log(error);
          }});
  }

  protected onSelect() {
    console.log('onSelect');
  }
}

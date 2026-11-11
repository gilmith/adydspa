import {Component, inject, input} from '@angular/core';
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

  imageUrl = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  id = input.required<number>();
  showButtons = input.required<boolean>();
  private readonly apiApplications = inject(API_APPLICATIONS);


  constructor() {
  }

  protected edit(id: number) {
    console.log(id);
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

import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CampaignDto} from 'adydspa-api-client';

@Component({
  imports: [],
  selector: 'app-campaign-details',
  styleUrl: './campaign-details.css',
  templateUrl: './campaign-details.html',
})
export class CampaignDetails {
  private readonly router = inject(Router);
  readonly campaignData = computed(
    () => this.router.currentNavigation()?.extras.state?.['campaignData'] as CampaignDto | undefined
  );


}

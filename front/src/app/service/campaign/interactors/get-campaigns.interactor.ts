import {inject, Service} from '@angular/core';
import {Observable} from 'rxjs';
import {CampaignGateway} from '../campaign.gateway';
import {CampaignPage, GetCampaignsQuery} from '../campaign.model';

@Service()
export class GetCampaignsInteractor {

  private readonly gateway = inject(CampaignGateway);

  execute(query: GetCampaignsQuery = {}): Observable<CampaignPage> {
    return this.gateway.getAll(query.page ?? 0, query.size ?? 1000, query.sort);
  }
}

import {inject, Service} from '@angular/core';
import {Observable} from 'rxjs';
import {CampaignGateway} from '../campaign.gateway';
import {Campaign, CreateCampaignInput} from '../campaign.model';

@Service()
export class CreateCampaignInteractor {

  private readonly gateway = inject(CampaignGateway);

  execute(input: CreateCampaignInput): Observable<Campaign> {
    if (!input.name?.trim()) {
      throw new Error('El nombre de la campaña es obligatorio');
    }
    return this.gateway.create({...input, name: input.name.trim()});
  }
}

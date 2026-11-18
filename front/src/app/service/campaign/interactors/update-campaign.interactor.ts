import {inject, Service} from '@angular/core';
import {Observable} from 'rxjs';
import {CampaignGateway} from '../campaign.gateway';
import {Campaign, UpdateCampaignInput} from '../campaign.model';

@Service()
export class UpdateCampaignInteractor {

  private readonly gateway = inject(CampaignGateway);

  execute(input: UpdateCampaignInput): Observable<Campaign> {
    if (!Number.isFinite(input.id) || input.id <= 0) {
      throw new Error(`Identificador de campaña inválido: ${input.id}`);
    }
    return this.gateway.update(input);
  }
}

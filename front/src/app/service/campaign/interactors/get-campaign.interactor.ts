import {inject, Service} from '@angular/core';
import {Observable} from 'rxjs';
import {CampaignGateway} from '../campaign.gateway';
import {Campaign} from '../campaign.model';

@Service()
export class GetCampaignInteractor {

  private readonly gateway = inject(CampaignGateway);

  execute(id: number): Observable<Campaign> {
    if (!Number.isFinite(id) || id <= 0) {
      throw new Error(`Identificador de campaña inválido: ${id}`);
    }
    return this.gateway.getById(id);
  }
}

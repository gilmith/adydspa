import {inject, Service} from '@angular/core';
import {Observable} from 'rxjs';
import {CampaignGateway} from '../campaign.gateway';

@Service()
export class DeleteCampaignInteractor {

  private readonly gateway = inject(CampaignGateway);

  execute(id: number): Observable<void> {
    if (!Number.isFinite(id) || id <= 0) {
      throw new Error(`Identificador de campaña inválido: ${id}`);
    }
    return this.gateway.delete(id);
  }
}

import {Observable} from 'rxjs';
import {
  Campaign,
  CampaignPage,
  CreateCampaignInput,
  UpdateCampaignInput
} from './campaign.model';

/**
 * Puerto de acceso a campañas. Los interactors dependen de esta abstracción,
 * no del cliente HTTP generado.
 */
export abstract class CampaignGateway {
  abstract getAll(page: number, size: number, sort?: string): Observable<CampaignPage>;

  abstract getById(id: number): Observable<Campaign>;

  abstract create(input: CreateCampaignInput): Observable<Campaign>;

  abstract update(input: UpdateCampaignInput): Observable<Campaign>;

  abstract delete(id: number): Observable<void>;
}

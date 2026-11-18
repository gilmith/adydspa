import {inject, Service} from '@angular/core';
import {Observable, throwError} from 'rxjs';

import {ApiStrategy} from '../api-strategy.service';
import {
  ApiApplicationsEnum
} from '../../../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';
import {CreateCampaignInteractor} from './interactors/create-campaign.interactor';
import {DeleteCampaignInteractor} from './interactors/delete-campaign.interactor';
import {GetCampaignInteractor} from './interactors/get-campaign.interactor';
import {GetCampaignsInteractor} from './interactors/get-campaigns.interactor';
import {UpdateCampaignInteractor} from './interactors/update-campaign.interactor';

/**
 * Adaptador del contrato genérico que consume `<adyd-form>`.
 * La lógica de negocio vive en los interactors; esta clase solo traduce
 * el payload sin tipar del formulario a la entrada de cada caso de uso.
 */
@Service()
export class CampaignService implements ApiStrategy {

  private static readonly OPERATIONS = new Set([
    'getAllCampaign',
    'createCampaign',
    'getCampaignById',
    'updateCampaign',
    'deleteCampaignId'
  ]);

  private readonly createCampaign = inject(CreateCampaignInteractor);
  private readonly deleteCampaign = inject(DeleteCampaignInteractor);
  private readonly getCampaign = inject(GetCampaignInteractor);
  private readonly getCampaigns = inject(GetCampaignsInteractor);
  private readonly updateCampaign = inject(UpdateCampaignInteractor);

  canConsume(apiEnum: ApiApplicationsEnum, operationId: string): boolean {
    return ApiApplicationsEnum.CAMPAIGN === apiEnum && CampaignService.OPERATIONS.has(operationId);
  }

  execute(data: Record<string, string | number | File>, operationId: string): Observable<unknown> {
    switch (operationId) {
      case 'createCampaign':
        return this.createCampaign.execute({
          name: this.requireString(data, 'name'),
          imageUrl: this.optionalString(data, 'fileStoreUrl')
        });
      case 'updateCampaign':
        return this.updateCampaign.execute({
          id: this.requireId(data),
          name: this.optionalString(data, 'name'),
          description: this.optionalString(data, 'description'),
          image: this.optionalFile(data, 'image') ?? this.optionalFile(data, 'imagen')
        });
      case 'deleteCampaignId':
        return this.deleteCampaign.execute(this.requireId(data));
      case 'getAllCampaign':
        return this.getCampaigns.execute({
          page: this.optionalNumber(data, 'page'),
          size: this.optionalNumber(data, 'size'),
          sort: this.optionalString(data, 'sort')
        });
      case 'getCampaignById':
        return this.getCampaign.execute(this.requireId(data));
      default:
        return throwError(() => new Error(`Operación de campaña no soportada: ${operationId}`));
    }
  }

  private requireId(data: Record<string, string | number | File>): number {
    const id = this.optionalNumber(data, 'campaignId') ?? this.optionalNumber(data, 'id');
    if (id === undefined || id <= 0) {
      throw new Error('El identificador de la campaña es obligatorio');
    }
    return id;
  }

  private requireString(data: Record<string, string | number | File>, key: string): string {
    const value = this.optionalString(data, key);
    if (!value) {
      throw new Error(`El campo "${key}" es obligatorio`);
    }
    return value;
  }

  private optionalString(data: Record<string, string | number | File>, key: string): string | undefined {
    const value = data[key];
    return typeof value === 'string' && value.trim() !== '' ? value : undefined;
  }

  private optionalNumber(data: Record<string, string | number | File>, key: string): number | undefined {
    const value = data[key];
    return typeof value === 'number' ? value : undefined;
  }

  private optionalFile(data: Record<string, string | number | File>, key: string): File | undefined {
    const value = data[key];
    return value instanceof File ? value : undefined;
  }
}

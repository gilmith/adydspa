import {inject, Service} from '@angular/core';
import {map, Observable} from 'rxjs';
import {
  CampaignControllerService,
  CampaignDto,
  PaginatedDto
} from 'adydspa-api-client';
import {CampaignGateway} from './campaign.gateway';
import {
  Campaign,
  CampaignPage,
  CreateCampaignInput,
  UpdateCampaignInput
} from './campaign.model';

/**
 * Adaptador que aísla al resto de la aplicación del cliente OpenAPI generado.
 */
@Service()
export class CampaignApiGateway extends CampaignGateway {

  private readonly api = inject(CampaignControllerService);

  getAll(page: number, size: number, sort?: string): Observable<CampaignPage> {
    return this.api
      .getAllCampaign(page, size, sort)
      .pipe(map(dto => this.toPage(dto)));
  }

  getById(id: number): Observable<Campaign> {
    return this.api
      .getCampaignById(id)
      .pipe(map(dto => this.toCampaign(dto)));
  }

  create(input: CreateCampaignInput): Observable<Campaign> {
    return this.api
      .createCampaign({name: input.name, fileStoreUrl: input.imageUrl})
      .pipe(map(dto => this.toCampaign(dto)));
  }

  update(input: UpdateCampaignInput): Observable<Campaign> {
    return this.api
      .updateCampaign(input.id, input.name, input.description, input.image)
      .pipe(map(dto => this.toCampaign(dto)));
  }

  delete(id: number): Observable<void> {
    return this.api
      .deleteCampaignId(id)
      .pipe(map(() => undefined));
  }

  private toPage(dto: PaginatedDto): CampaignPage {
    return {
      page: dto.page,
      totalPages: dto.totalPages,
      totalElements: dto.totalElements,
      content: (dto.content as CampaignDto[]).map(row => this.toCampaign(row))
    };
  }

  private toCampaign(dto: CampaignDto): Campaign {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.fileStoreUrl
    };
  }
}

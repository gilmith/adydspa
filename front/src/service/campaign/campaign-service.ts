import {inject, Service} from '@angular/core';
import {
  ApiApplicationsEnum
} from '../../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';
import {ApiStrategy} from '../api-strategy.service';
import {Observable} from 'rxjs';
import {CampaignControllerService, CampaignDto} from 'adydspa-api-client';


@Service()
export class CampaignService implements ApiStrategy {

  private static readonly OPERATIONS = new Set(['getAllCampaign', 'createCampaign', 'getCampaignById', 'updateCampaign', 'deleteCampaignId']);
  private readonly campaignApi = inject(CampaignControllerService);

  canConsume(apiEnum: ApiApplicationsEnum, operationId: string): boolean {
    return ApiApplicationsEnum.CAMPAIGN === apiEnum && CampaignService.OPERATIONS.has(operationId);
  }

  execute(data: Record<string, string | number | File>, operationId: string): Observable<any> {
    console.log(data, operationId);
    const inputData = this.buildCampaignDto(data)
    switch (operationId) {
      case 'createCampaign':
        return Observable.create((observer: any) => {
          observer.next(data);
          observer.complete();
        });
      case 'updateCampaign':
        return this.campaignApi.updateCampaign(
          inputData.id,
          inputData.name as string | undefined,
          inputData.description as string | undefined,
          data['image'] as Blob | undefined
        );
      case 'deleteCampaignId':
        return this.campaignApi.deleteCampaignId(inputData.id);
      case 'getAllCampaign':
        return Observable.create((observer: any) => {
          observer.next(data);
          observer.complete();
        });
      case 'getCampaignById':
        return Observable.create((observer: any) => {
          observer.next(data);
          observer.complete();
        });
      default:
        return Observable.create((observer: any) => {
          observer.next(data);
          observer.complete();
        });
    }
  }

  private buildCampaignDto(data: Record<string, unknown>): CampaignDto {
    let campaignDto: CampaignDto = {description: undefined, fileStoreUrl: undefined, id: 0, name: ""}
    if (typeof data["campaignId"] === 'number') {
      campaignDto.id = data["campaignId"];
    }
    if (typeof data["name"] === 'string') {
      campaignDto.name = data["name"];
    }
    if(typeof data["description"] === 'string') {
      campaignDto.description = data["description"];
    }
    return campaignDto;
  }

}

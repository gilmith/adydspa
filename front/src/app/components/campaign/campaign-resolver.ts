import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {CampaignControllerService, PaginatedDto} from 'adydspa-api-client';


export const getAllCampaignResolver: ResolveFn<PaginatedDto> = () => {
  const campaignApi = inject(CampaignControllerService);
  return  campaignApi.getAllCampaign(0, 1000);
};

